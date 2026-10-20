import React, { useEffect, useRef, useState } from 'react'
import {images} from '../assets/images.js'
import icons from '../assets/icons.js'
import '../styles/contact-us.css'

import Button from './Button'

const ContactUs = () => {
    const [image, setImage] = useState(images.anyaOne);
    const timerRef = useRef(null)

    const handleMouseClick = () => {
        setImage( images.anyaTwo )

        clearTimeout(timerRef.current)

        timerRef.current = setTimeout(() => {
            setImage(images.anyaOne)
        }, 3000)
    }

    useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])


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
                <img src={icons.heart} className='bubble-text__icon' alt="" />
                <img src={image} 
                onClick={ handleMouseClick }
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

                    <Button className='formSubmitBtn' type='submit' content='CONNECT WITH US' id="formSubmitBtn"/>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
