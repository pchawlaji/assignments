import { RecoilRoot, useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from './atoms'

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

  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? '99+' : networkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? '99+' : jobsCount})</button>
      <button>Notifications ({notificationsCount >= 100 ? '99+' : notificationsCount})</button>
      <button>Messaging ({messagingCount >= 100 ? '99+' : messagingCount})</button>

      <button>Me ({totalNotifications})</button>
    </>
  )
}

export default App
