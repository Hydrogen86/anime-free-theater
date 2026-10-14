import React from 'react'
import {useState, useEffect} from 'react'
import {images} from '../assets/images.js'
import '../styles/hero.css';

const heroImages = [
        images.acientMagnusBride, 
        images.bleach, 
        images.haikyuOne,
        images.haikyuTwo,
        images.onePiece,
        images.onePunchMan
    ];


const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(()=> {
            setCurrentIndex(prev => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero"
            style={{ backgroundImage: `url("${heroImages[currentIndex]}")` }}
        >
            <div className="opacity"></div>

            <div className="hero__text-area">
                <span className="hero-txt__heading">
                    Watch Your Favorite Anime 
                    <span>Ads Free.</span>
                </span>

                <p className="description">
                   Dive into your favorite anime worlds without interruptions. Watch the series you love, discover new adventures, and enjoy every episode completely free with zero ads, just pure anime.
                </p>

                <div className="hero__actions">
                    <a href="#gallery" className="hero__btn">
                        Watch Videos <span>↗</span>
                    </a>

                    <a href="#contact-us" className="hero__link">
                        Contact Us                    </a>
                </div>
            </div>

            <div className="hero__decoration">
                <span>WATCH</span>
                <span>RELAX</span>
                <span>NO ADS</span>
            </div>
        </section>

    );

};

export default Hero;
