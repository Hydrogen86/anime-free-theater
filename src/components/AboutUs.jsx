import React, { useState } from 'react'
import '../styles/about-us.css'
import {images} from '../assets/images.js'

const AboutUs = () => {
  return (
    <section className='about-us' id='about-us'>

        <div className="flip-card">
          <div className="inner">
            <img className='card-front' src={images.killua} alt="front" />
            <img className='card-back' src={images.yuujiro} alt="back" />
          </div>
        </div>

        <div className="about-us__description">
            <h1>ABOUT US</h1>
            <p>
              Anime Theater is a personal web development project created for educational and learning purposes only. It serves as a practice platform for exploring web development, user interface design, and anime-themed content presentation.

              All anime titles, characters, images, and related content belong to their respective owners. Anime Theater does not claim ownership of any third-party content featured on the platform. This project is intended for educational demonstration and personal learning, not commercial use.
            </p>
        </div>
    </section>
  )
}

export default AboutUs
