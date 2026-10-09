import React from 'react'
import {useState, useEffect} from 'react'
import '../styles/hero.css';

//Images
import bleach from '../assets/images/bleach.jpg'
import haikyuu2 from '../assets/images/haikyuu 2.jpg'
import haikyuu from '../assets/images/haikyuu.jpg'
import acientMagnus from '../assets/images/acient-magnus-bride.jpg'
import onePiece from '../assets/images/one-piece.jpg'
import onePunchMan from '../assets/images/one-punch-man.jpg'

const images = [bleach, haikyuu, haikyuu2, acientMagnus, onePiece, onePunchMan];


const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(()=> {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero"
            style={{ backgroundImage: `url("${images[currentIndex]}")` }}
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
                    <a href="#projects" className="hero__btn">
                        Explore Projects <span>↗</span>
                    </a>

                    <a href="#about" className="hero__link">
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
