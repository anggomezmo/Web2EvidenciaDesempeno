import React from 'react'
import './Button.css'
function Button({ text, variant, onClick }) {
    
    let buttonClass = `button-${variant}`

    return (
    <button className={buttonClass} onClick={onClick}>
        {text}
    </button>
  )
}
export default Button