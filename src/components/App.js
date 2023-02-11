import React, { createContext, useEffect, useState } from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import Product from './Products';
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, Link } from 'react-router-dom';
import CartPage from './CartPage';
import Login from './Login';
import LoginPage from './LoginPage';

export const mainData = createContext();

const App = () => {
  useEffect(()=>{
    if(localStorage.getItem('current') !== null) {
      setNamex(localStorage.getItem('current'));
    }
  },[])
const[namex, setNamex] = useState('Unknown');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <div id="main">
        <mainData.Provider value={{ namex, setNamex, cart, setCart, products, setProducts }}>
          <Navbar />
          <div>
            {/* <Link to="about">Click to view our about page</Link> */}
          </div>
          {/* <Product /> */}
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path='cart' element = {<CartPage/>} />
            <Route exact path='login' element = {<LoginPage />} />
          </Routes>
        </mainData.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App;