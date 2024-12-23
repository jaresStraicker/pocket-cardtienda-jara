import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({cardTxt}) => {
    const TxtBienvenido = cardTxt;
    
  return (
    <>
        {/* h2 */}
        <h2>{TxtBienvenido}</h2>

        
    </>
  )
}

export default ItemListContainer