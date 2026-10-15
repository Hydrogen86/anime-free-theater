import { useRef } from 'react'
import { jujutsuKaisenImages } from '../assets/images.js'
import icons from '../assets/icons.js'
import '../styles/carousel.css'

const Carousel = () => {

    const trackRef = useRef(null)

  return (

    <section className='carousel'>
        <h1 className='carousel-title'>JUJUTSU KAISEN</h1>

        <div className="carousel-container">

            <button className='right-arrow'>
                <img src={icons.leftArrow} alt="arrows" />
            </button>

            <div className="carousel-track" ref={trackRef}>
                {jujutsuKaisenImages.map((img, index) => (
                    <div className="card " data-index={index} >
                        <img src={img} alt="JJK-image" draggable="false"/>
                    </div>
                ))}              
            </div>

            <button className='left-arrow'>
                <img src={icons.rightArrow} alt="arrows" />
            </button>

        </div>
    </section>
  )
}

export default Carousel
