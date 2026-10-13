import React from 'react'
import {useState} from 'react'
import '../styles/contact-us.css'

import anyaHoverOut from '../assets/images/anya-1.png'
import anyaHoverEnter from '../assets/images/anya-2.png'
import Heart from '../assets/icons/heart.png'
import Shy from '../assets/images/Shy Pink-Haired.png'

const ContactUs = () => {
    const [image, setImage] = useState(anyaHoverOut);
    return (
        <section className='contact-us' id='contact-us'>
            <div className="contact-us__design">

                <div className="bubble-text">
                    <h2>Let's Connect!</h2>
                    <p>Have feedback, suggestions, or found something that needs fixing? We'd love to hear from you!
                    Whether you want to share ideas, report a bug, recommend new features, or collaborate with us, feel free to reach out. Every message helps us make your anime experience better.</p>
                    <span>Got something in mind? Let's hear it!</span>

                    <div className="triangle"></div>
                </div>
                <img src={Heart} className='bubble-text__icon' alt="" />
                <img src={image} 
                onMouseEnter={() => setImage(anyaHoverEnter)}
                onMouseLeave={() => setImage(anyaHoverOut)}
                className='about-us__main-image' alt="contact-us__image" />
                <div className="contact-us__text-heading">
                    <span>Do not touch Anya!</span>
                </div>
            </div>

            <div className="contact-form__container">
                <form action="">
                    <h1>CONTACT US</h1>
                    <div className="input-field">
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" placeholder='Enter here...' required/><br />
                        <label htmlFor="message">Message</label><br/>
                        <textarea name="message" id="message" placeholder='type here...' required></textarea><br />
                    </div>

                    <button type='submit'>CONNECT WITH US</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
