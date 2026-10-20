import React from 'react'
import '../styles/button.css'

const Button = ({id, className, type, content}) => {
  return (
    <div className='btn-container'>
      <button id={id} type={type} className={className} >
        <span>{content}</span>
      </button>
    </div>
  )
}

export default Button
