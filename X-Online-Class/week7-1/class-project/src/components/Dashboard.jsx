import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from '../store/atoms/count';

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
