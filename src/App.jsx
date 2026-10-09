import { useState } from 'react'
import './App.css'


//-----------------------------------------------
//---------------Components----------------------
//-----------------------------------------------
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Gallery/>
    </>
  )
}

export default App
