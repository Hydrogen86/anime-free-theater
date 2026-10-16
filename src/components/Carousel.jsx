import { useRef, useState, useEffect } from 'react'
import { jujutsuKaisenImages, narutoImages, hunterXhunterImages, folderName } from '../assets/images.js'
import icons from '../assets/icons.js'
import '../styles/carousel.css'
import ShowAlert from './ShowAlert.jsx'

const Carousel = () => {

    const trackRef = useRef(null)
    
    const imageFolder = [ jujutsuKaisenImages, narutoImages, hunterXhunterImages ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClickLimit = (action) => {
        if (action === "prev") { setCurrentIndex(prev => (prev - 1 + imageFolder.length) % imageFolder.length) }
        else {setCurrentIndex(prev => (prev + 1) % imageFolder.length)}
    }

  return (

    <section className='carousel'>
        <h1 className='carousel-title'>{folderName[currentIndex]}</h1>

        <div className="carousel-container">

            <button className='right-arrow' onClick={ () => handleClickLimit("prev") }>
                <img src={icons.leftArrow} alt="arrows" />
            </button>

            <div className="carousel-track" ref={trackRef}>
                {imageFolder[currentIndex].map((img, index) => (
                    <div className="card" key={index} data-index={index} >
                        <img src={img} alt={`JJK-image ${index + 1}`} draggable="false"/>
                    </div>
                ))}              
            </div>

            <button className='left-arrow' onClick={ () => handleClickLimit("next") }>
                <img src={icons.rightArrow} alt="arrows" />
            </button>

        </div>
    </section>
  )
}

export default Carousel
