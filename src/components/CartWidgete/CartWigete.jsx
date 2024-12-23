import React from 'react'
import'./CartWigete.css'
const CartWigete = () => {

    const imgCarrito = "https://us.123rf.com/450wm/prima91/prima911608/prima91160800022/61496662-carro-de-compras-con-car%C3%A1cter-juguete-pickachu-de-pok%C3%A9mon-anime-y-pokemon-ir-un-juego-m%C3%B3vil-free.jpg?ver=6"
  return (
   <div>
     <img className='carrito' src={imgCarrito} alt="carrio de compras"/>
     <strong>0</strong>
   </div>
  )
}

export default CartWigete