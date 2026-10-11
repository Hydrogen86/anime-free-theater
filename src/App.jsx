import { useState } from 'react'
import './App.css'


//-----------------------------------------------
//---------------Components----------------------
//-----------------------------------------------
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
