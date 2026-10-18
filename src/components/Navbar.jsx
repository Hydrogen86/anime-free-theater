import { useState } from 'react'
import icons from '../assets/icons.js'
import '../styles/header.css'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <div className="logo-container">
        <img src={icons.logo} alt="logo" />
      </div>

      <nav className={isMenuOpen ? "nav-open" : ""}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#about-us" onClick={closeMenu}>About Us</a>
        <a href="#contact-us" onClick={closeMenu}>Contact Us</a>
        <a href="#gallery" onClick={closeMenu}>Videos</a>
      </nav>

      <button 
        className="humburger"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}>

        <img 
          src={isMenuOpen ? icons.close : icons.menu}
          alt="humburger-icons" 
        />

      </button>
    </header>
  )
}

export default Navbar
