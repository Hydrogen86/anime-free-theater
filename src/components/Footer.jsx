import React from 'react'
import {useState, useEffect} from 'react'
import '../styles/footer.css'

// Images
import footerImage from '../assets/images/okay-2.png'
import footerImageRight from '../assets/images/itachi.jpg'
import footerImageMiddle from '../assets/images/sukuna.png'

// ICONS
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import discord from "../assets/icons/discord.png"
import tiktok from "../assets/icons/tiktok.png"
import twitter from "../assets/icons/twitter.png"

const icons = [ facebook, instagram, discord, tiktok, twitter ]

const Footer = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <footer>
            <img src={footerImage} alt="footer image" />
            <div className="address-area">
                <span className='heading-title'>
                    <span>Anime</span>
                    <span>Theater</span>
                </span>
                <div className="social-icons">
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt={`Social media icon ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className='footer__right-image'>
                <img src={footerImageMiddle} alt="right-img__footer" />
                <img src={footerImageRight} alt="middle-img__footer" />
            </div>
        </footer>
    )   
}

export default Footer
