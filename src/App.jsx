import { useState } from 'react'

//-----------------------------------------------
//---------------CSS Styles----------------------
//-----------------------------------------------
import './App.css'
import './styles/header.css'
import './styles/hero.css'


//-----------------------------------------------
//---------------Components----------------------
//-----------------------------------------------
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
