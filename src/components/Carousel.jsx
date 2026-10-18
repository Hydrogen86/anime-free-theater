import { useRef, useState, useEffect } from 'react'
import { jujutsuKaisenImages, narutoImages, hunterXhunterImages, folderName } from '../assets/images.js'
import icons from '../assets/icons.js'
import '../styles/carousel.css'
import ShowAlert from './ShowAlert.jsx'

const Carousel = () => {

    const trackRef = useRef(null)
    
    const imageFolder = [ jujutsuKaisenImages, narutoImages, hunterXhunterImages ]
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [count, setCount] = useState(0)

    const handleClickLimit = (action) => {
        if (action === "prev") { setCurrentIndex(prev => (prev - 1 + imageFolder.length) % imageFolder.length) }
        else {setCurrentIndex(prev => (prev + 1) % imageFolder.length)}
    }

    useEffect (() => {
        const track = trackRef.current

        if (!track) return;

        const interval = setInterval(() => {
            const firstCard = track.querySelector(".card")

            if (!firstCard) return

            const cardWidth = firstCard.getBoundingClientRect().width;
            const styles = window.getComputedStyle(track)
            const gap = parseFloat(styles.columnGap) || parseFloat(styles.gap) || 0

            const scrollAmount = cardWidth + gap

            //Move the image to the right
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
                //Return to the beginning when reaching the end
                track.scrollTo({
                    left: 0,
                    behavior: "smooth"
                })
                // setCount(prev => prev = 0)
            } else {
                track.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                })
                // setCount(prev => prev + 1);
            }
        }, 3000) //3 second

    }, [currentIndex])

    

  return (

    <section className='carousel'>
        <div className="carousel-container">

            <div className="carousel-header">
                <button className='right-arrow' onClick={ () => handleClickLimit("prev") }>
                    <img src={icons.leftArrow} alt="arrows" />
                </button>

                <h1 className='carousel-title'>{folderName[currentIndex]} </h1>
                
                <button className='left-arrow' onClick={ () => handleClickLimit("next") }>
                    <img src={icons.rightArrow} alt="arrows" />
                </button>
            </div>

            <div className="carousel-track" ref={trackRef}>
                {imageFolder[currentIndex].map((img, index) => (
                    <div className="card" key={index} data-index={index} >
                        <img src={img} alt={`JJK-image ${index + 1}`} draggable="false"/>
                    </div>
                ))}              
            </div>

            <div className="scroll-bar">
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
            </div>

        </div>
    </section>
  )
}

export default Carousel
