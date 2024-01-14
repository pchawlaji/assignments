import { useNavigate } from 'react-router-dom'

export function TopBar() {

    const navigate = useNavigate();

    return <div style={{ position: 'sticky', top: 0, backgroundColor: 'black', color: 'white' }} >
        <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
        <button onClick={() => { navigate("/") }}>Landing Page</button>
    </div>
    
}