import { useState } from 'react'
import icons from '../assets/icons.js'
import '../styles/header.css'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentIcon, setCurrentIcon] = useState(icons.menu)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuIcon = () => {
    setCurrentIcon(prev => prev === icons.menu ? icons.close : icons.menu)
  }

  return (
    <header>
      <div className="logo-container">
        <img src={icons.logo} alt="logo" />
      </div>

      <nav className={isMenuOpen ? "nav-open" : ""}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about-us" onClick={() => setIsMenuOpen(false)}>About Us</a>
        <a href="#contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Videos</a>
      </nav>

      <div className="humburger" onClick={toggleMenu}>
        <img 
          src={currentIcon} 
          onClick={handleMenuIcon}
          alt="humburger-icons" 
        />
      </div>
    </header>
  )
}

export default Navbar
