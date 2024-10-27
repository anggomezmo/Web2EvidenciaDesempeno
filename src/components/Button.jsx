import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
function Button({ variant, to, children }) {
    
    let buttonClass = `button-${variant}`

    return (
    <Link to={to} className={buttonClass}>
      {children}
    </Link>

  )
}
export default Button