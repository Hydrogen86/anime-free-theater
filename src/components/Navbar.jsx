import { useState } from 'react'
import logo from '../assets/icons/logo.jpg'
import '../styles/header.css'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>

      <nav className={isMenuOpen ? "nav-open" : ""}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about-us" onClick={() => setIsMenuOpen(false)}>About Us</a>
        <a href="#contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Videos</a>
      </nav>

      <div className="humburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  )
}

export default Navbar
