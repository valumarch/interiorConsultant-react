import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

function App() {
  return(
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
