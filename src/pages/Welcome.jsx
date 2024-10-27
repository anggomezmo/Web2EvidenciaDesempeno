import React from 'react'
import HeaderContainer from '../components/HeaderContainer'
import ImageContainer from '../components/ImageContainer'
import './Welcome.css'

function Welcome() {
  return (
    <div>
        <header>
            <HeaderContainer variety='welcome'/>
        </header>
        <section>
            <ImageContainer variety='welcome' varietyDiv='welcome-div'/>
        </section>
    </div>
  )
}

export default Welcome