import React from 'react'
import { jujutsuKaisenImages } from '../assets/images.js'
import icons from '../assets/icons.js'
import '../styles/carousel.css'

const Carousel = () => {
  return (

    <section className='carousel'>
        <h1 className='carousel-title'>JUJUTSU KAISEN</h1>

        <div className="carousel-container">

            <button className='right-arrow'>
                <img src={icons.leftArrow} alt="arrows" />
            </button>

            <div className="carousel-track">
                <div className="card left-2" data-index="1" >
                    <img src={jujutsuKaisenImages.jujutsuKaisenOne} alt="image" />
                </div>
                <div className="card left-1" data-index="2" >
                    <img src={jujutsuKaisenImages.jujutsuKaisenTwo} alt="image" />
                </div>
                <div className="card" data-index="3" >
                    <img src={jujutsuKaisenImages.jujutsuKaisenThree} alt="image" />
                </div>
                <div className="card right-1" data-index="4" >
                    <img src={jujutsuKaisenImages.jujutsuKaisenFour} alt="image" />
                </div>
                <div className="card right-2" data-index="5" >
                    <img src={jujutsuKaisenImages.jujutsuKaisenFive} alt="image" />
                </div>
            </div>
            <button className='left-arrow'>
                <img src={icons.rightArrow} alt="arrows" />
            </button>
        </div>
    </section>
  )
}

export default Carousel
