import React from 'react'
import '../styles/about-us.css'
import aboutUsImage from '../assets/images/killua.png'

const AboutUs = () => {
  return (
    <section className='about-us'>
        <img src={aboutUsImage} alt="about-us-image" />
        <div className="about-us__description">
            <h1>ABOUT US</h1>
            <p>
                Welcome to Anime Theater, your ultimate destination for anime fans! Our platform is designed to bring your favorite anime closer to you, offering a simple and enjoyable way to explore and watch anime. We believe every fan deserves an immersive viewing experience without unnecessary distractions, so you can focus on the stories, characters, and adventures you love.

                Whether you're revisiting timeless classics or discovering your next favorite series, Anime Theater is where your anime journey begins. Sit back, relax, and enjoy the world of anime—all in one place.
            </p>
        </div>
    </section>
  )
}

export default AboutUs
