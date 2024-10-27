import React from 'react'
import './HeaderContainer.css'
import Button from './Button'
function HeaderContainer({ variety }) {

    if (variety == 'welcome') {
        return (
            <div className='header'>
                <Button to='/login' variant='login'>Iniciar Sesión</Button>
                <Button to='/register' variant='register'>Registrarse</Button>
            </div>
        )
    } else { 
        return (
        <div className="header">
            <Button to="/" variant="logout">Cerrar sesión</Button>
        </div>
        )
    }
}

export default HeaderContainer



