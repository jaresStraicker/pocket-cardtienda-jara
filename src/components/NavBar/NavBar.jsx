import React from 'react'
import './NavBar.css'
import CartWigete from '../CartWidgete/CartWigete'

const NavBar = () => {
  return (
    <header>
        <h1>Pocket - Card -Tienda</h1>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Top Card</li>
                <li>Scarle&Violet</li>
                <li>Scarle&Violet - Paldea Evolved</li>
            </ul>
            
        </nav>
        <CartWigete/>
    </header>
  )
}

export default NavBar