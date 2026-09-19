import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
      
    <header>
        <h1> Student DashBoard</h1>
        <p>Welcome to student portal</p>
    </header>

    <main className='grid'>
      <div className='card'>
        <h2>Attendace</h2>
        <p>92%</p>
      </div>

        <div className='card'>
        <h2>CGPA</h2>
        <p>8.95</p>
      </div>


        <div className='card'>
        <h2>Courses</h2>
        <p>6</p>
      </div>

    </main>

    <footer>
      <p>© 2026 Student Portal</p>
    </footer>


    </>
  )
}

export default App