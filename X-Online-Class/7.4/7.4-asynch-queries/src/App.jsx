import { networkAtom } from './atoms.js'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const networkValue = useRecoilValue(networkAtom)
  return (
    <div>
      <button>UserId ({networkValue.userId})</button>
    </div >)
}

export default App
