import { useContext, useState, createContext } from 'react'
const CountContext = createContext(0);

export default function Dashboard() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>Dashboard Page</div>
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider>
        </div>
    )
}

function Count() {
    return (
        <div>
            <CountRender />
            <Buttons />
        </div>
    )
}

function CountRender() {
    const { count } = useContext(CountContext)
    return (
        <div>
            <h1>Count is {count}</h1>
        </div>
    )
}

function Buttons() {
    const { count, setCount } = useContext(CountContext)
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
        </div >
    )
}
