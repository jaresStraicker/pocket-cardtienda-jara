import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const App = () => {

  const textoItemListContainer = "Bienvenidos";
  return (
    <>
    <NavBar/>
    <ItemListContainer cardTxt ={textoItemListContainer}/>
      
    </>
  )
}

export default App