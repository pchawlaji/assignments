import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from '../store/atoms/count';
import { evenSelector } from '../store/selectors/countSelector';
import { useMemo } from 'react';

export default function Dashboard() {

    return (
        <div>
            <div>Dashboard Page</div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    )
}

function Count() {
    console.log("Count Re-Render")
    return (
        <div>
            <CountRender />
            <Buttons />
        </div>
    )
}

function CountRender() {
    const count = useRecoilValue(countAtom)
    return (
        <div>
            <h1>Count is {count}</h1>
            <EventCountRenderer />
        </div>
    )
}

function EventCountRenderer() {
    //const count = useRecoilValue(countAtom)
    //const isEven = useMemo(() => count % 2 === 0, [count])

    const isEven = useRecoilValue(evenSelector)

    return (
        <div>
            {isEven ? "Even" : "Odd"}
        </div>
    )
}

function Buttons() {
    const [count, setCount] = useRecoilState(countAtom)
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
        </div >
    )
}
