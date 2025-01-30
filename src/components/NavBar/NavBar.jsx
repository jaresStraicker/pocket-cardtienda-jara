import React from 'react'
import './NavBar.css'
import CartWigete from '../CartWidgete/CartWigete'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
        <h1>Pocket - Card -Tienda</h1>
        <nav>
            <ul>
                <li><Link to="/" />Inicio</li>
                <li><Link to="/categorias"/>Top Card</li>
                <li><Link to="/categorias"/>Scarle&Violet</li>
                <li><Link to="/categorias"/>Scarle&Violet - Paldea Evolved</li>
            </ul>
            
        </nav>
        <CartWigete/>
    </header>
  )
}

export default NavBar