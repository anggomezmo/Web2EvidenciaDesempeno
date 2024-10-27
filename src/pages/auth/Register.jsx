import React from 'react'
import ImageContainer from '../../components/ImageContainer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import './Login.css'
function Register() {
  return (
    <div className='main-container'>
            <div className='reg'>
                
                <ImageContainer variety='login-register' varietyDiv='login-div'/>
                
                <div className='login-inputs'>
                    <Input type='text' placeHolder='Usuario' />
                    <Input type='password' placeHolder='Contraseña' />
                    <Input type='text' placeHolder='Correo' />
                    <Input type='text' placeHolder='Nombre' />
                </div>
                <div className='login-final'>
                    <Button to='/login' variant='register'>Crear cuenta</Button>
                    <Link to='/login' className='link'>¿Ya tiene cuenta?</Link>
                </div>
            </div>

        </div>
  )
}

export default Register