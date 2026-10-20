import React from 'react'
import '../styles/button.css'

const Button = ({id, className, type, content, isdisabled}) => {
  return (
    <div className='btn-container'>
      <button id={id} type={type} className={className} disabled={isdisabled}>
        <span>{content}</span>
      </button>
    </div>
  )
}

export default Button
