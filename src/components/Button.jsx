import React from 'react'
import '../styles/button.css'

const Button = ({id, className, type, content}) => {
  return (
    <button id={id} type={type} className={className} >
        <span>{content}</span>
    </button>
  )
}

export default Button
