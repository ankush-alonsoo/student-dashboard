import { useState } from 'react'

import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import StudentCard from "./components/StudentCard"

function App() {
 

  return (
    <>

    <Header name="Ankush"/>
      
    <main className='grid'>
      
    <StudentCard cgpa="9.3"/>
    <StudentCard cgpa="8.9"/>
    <StudentCard cgpa="9.1"/>

    </main>

    <Footer/>

    </>
  )
}

export default App