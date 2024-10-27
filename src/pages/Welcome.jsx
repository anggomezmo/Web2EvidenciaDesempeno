import React from 'react'
import HeaderContainer from '../components/HeaderContainer'
import ImageContainer from '../components/ImageContainer'
import './Welcome.css'

function Welcome() {
  return (
    <div>
        <header>
            <HeaderContainer/>
        </header>
        <section>
            <ImageContainer/>
        </section>
    </div>
  )
}

export default Welcome