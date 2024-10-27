import React from 'react'
import ImageContainer from '../../components/ImageContainer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
    return (

        <div className='main-container'>
            <div className='login'>
                
                <ImageContainer variety='login-register' varietyDiv='login-div'/>
                
                <div className='login-inputs'>
                    <Input type='text' placeHolder='Usuario' />
                    <Input type='password' placeHolder='Contraseña' />
                </div>
                <div className='login-final'>
                    <Button to='/dashboard' variant='register'>Iniciar Sesión</Button>
                    <Link to='/register' className='link'>¿No tiene una cuenta?</Link>
                </div>
            </div>

        </div>
    )
}

export default Login