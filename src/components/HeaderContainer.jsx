import React from 'react'
import './HeaderContainer.css'
import Button from './Button'
function HeaderContainer() {
    return (
        <div className='header'>
            <Button text = "Iniciar Sesión" variant= "login" />
            <Button text = "Registrarse" variant= "register"/>
        </div>
    )
}

export default HeaderContainer