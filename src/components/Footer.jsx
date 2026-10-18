
import React from 'react';
import { images } from '../assets/images.js';
import icons from '../assets/icons.js';
import '../styles/footer.css';

const Footer = () => {
    const socialIcons = Object.entries(icons).filter(
        ([name]) => (name !== 'logo' && name !== 'heart') && (name !== 'rightArrow' && name !== 'leftArrow') && (name !== 'menu' && name !== 'close')
    );

    return (
        <footer>
            <img src={images.okayTwo} alt="Footer character" />

            <div className="address-area">
                <span className="heading-title">
                    <span>Anime</span>
                    <span>Theater</span>
                </span>

                <div className="social-icons">
                    {socialIcons.map(([name, icon]) => (
                        <img
                            key={name}
                            src={icon}
                            alt={`${name} social media icon`}
                        />
                    ))}
                </div>
            </div>

            <div className="footer__right-image">
                <img src={images.itachi} alt="Itachi" />
                <img src={images.sukuna} alt="Sukuna" />
            </div>
        </footer>
    );
};

export default Footer;
