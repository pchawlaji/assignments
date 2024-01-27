import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ backgroundColor: 'red' }}>Hi</div>
        <div style={{ backgroundColor: 'blue' }}>Hi</div>
        <div style={{ backgroundColor: 'yellow' }}>Hi</div>
      </div>

      <div class="flex">
        <div class="flex-none w-14 h-14">
          01
        </div>
        <div class="flex-initial w-64 ...">
          02
        </div>
        <div class="flex-initial w-32 ...">
          03
        </div>
      </div>
    </>
  )
}

export default App
