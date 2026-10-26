import { useRef, useState, useEffect } from 'react'
import { jujutsuKaisenImages, narutoImages, hunterXhunterImages, folderName } from '../assets/images.js'
import icons from '../assets/icons.js'
import '../styles/carousel.css'
import ScrollAnimation from './ScrollAnimation.jsx'

const Carousel = () => {

    const trackRef = useRef(null)
    
    const imageFolder = [ jujutsuKaisenImages, narutoImages, hunterXhunterImages ]
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [count, setCount] = useState(0)

    const handleClickLimit = (action) => {
        if (action === "prev") { 
            setCurrentIndex(prev => (prev - 1 + imageFolder.length) % imageFolder.length) 
        } else {
            setCurrentIndex(prev => (prev + 1) % imageFolder.length)
        }
    }

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const interval = setInterval(() => {
            const firstCard = track.querySelector(".card");

            if (!firstCard) return;

            const cardWidth = firstCard.getBoundingClientRect().width;
            const styles = window.getComputedStyle(track);

            const gap =
                parseFloat(styles.columnGap) ||
                parseFloat(styles.gap) ||
                0;

            const scrollAmount = cardWidth + gap;

            const maxScrollLeft =
                track.scrollWidth - track.clientWidth;

            if (track.scrollLeft >= maxScrollLeft - 2) {
                track.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                track.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        }, 3000);

        // Stop the timer when the component unmounts
        return () => clearInterval(interval);

    }, []);

    

  return (

    <section className='carousel'>
        <div className="carousel-container">

            <ScrollAnimation className='zoom-in'>
                <div className="carousel-header">
                    <button className='right-arrow' onClick={ () => handleClickLimit("prev") }>
                        <img src={icons.leftArrow} alt="arrows" />
                    </button>

                    <h1 className='carousel-title'>{folderName[currentIndex]} </h1>

                    <button className='left-arrow' onClick={ () => handleClickLimit("next") }>
                        <img src={icons.rightArrow} alt="arrows" />
                    </button>
                </div>
            </ScrollAnimation>

            <ScrollAnimation className='fade-up'>
                <div className="carousel-track" ref={trackRef}>
                    {imageFolder[currentIndex].map((img, index) => (
                        <div className="card" key={index} data-index={index} >
                            <img src={img} alt={`JJK-image ${index + 1}`} draggable="false"/>
                        </div>
                    ))}              
                </div>
            </ScrollAnimation>

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
