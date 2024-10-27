import React from 'react'
import HeaderContainer from '../components/HeaderContainer'
import './Dashboard.css'
import Button from '../components/Button'
function Dashboard() {
  return (
    <div>
        <header>
            <HeaderContainer/>
        </header>
        <main>
            <nav>
                <Button variant='dashboard'>Servicios</Button>
                <Button variant='dashboard'>Contacto</Button>
            </nav>
            <section>
                <div className='titulo'>Este es el panel principal</div>
                <div className='containerFather'>
                    <div className='container'></div>
                    <div className='container'></div>
                    <div className='container'></div>

                </div>


            </section>
        </main>
    </div>
  )
}

export default Dashboard