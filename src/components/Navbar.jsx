import React from 'react'
import logo from '../assets/icons/logo.jpg'
import Swal from 'sweetalert2'
import '../styles/header.css'

const Navbar = () => {

  const showAlert = () => {
    Swal.fire({
      title: 'Hello Anime Fam!',
      text: `Sorry! the Navigation button is not available, Webpage is not yet updated`,
      icon: 'warning',
      confirmButtonText: "Let's Go!"
    });
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <a href="#" onClick={showAlert}>Home</a>
        <a href="#" onClick={showAlert}>About Us</a>
        <a href="#" onClick={showAlert}>Contact Us</a>
        <a href="#gallery">Videos</a>
      </nav>

      <div className="humburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  )
}

export default Navbar
