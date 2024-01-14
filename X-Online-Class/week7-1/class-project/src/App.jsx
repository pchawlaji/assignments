import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))
import { TopBar } from './components/TopBar'

function App() {

  //suspense API
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Landing />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
