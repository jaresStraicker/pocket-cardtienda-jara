import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const App = () => {

  const textoItemListContainer = "Bienvenidos";
  return (
    <>
    <NavBar/>
    <ItemListContainer cardTxt ={textoItemListContainer}/>
    <Router>  
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/categorias/:categoriasId" element={<Category />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </Router>
      
    </>
  )
}

export default App