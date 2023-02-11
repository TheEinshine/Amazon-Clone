import React, { useContext } from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";
import { mainData } from "./App";


let counter = 0;
export const h1Data = createContext(counter);
const Cart = () => {
  const {cart} = useContext(mainData);
  // console.log(cart);

  return (
    <div>
    <h1Data.Provider value={counter}>
    
      <h1 id="addToCartCounter" style={{ color: "Orange" }}>
        {cart.length}
      </h1>
      </h1Data.Provider>
      
      <Link to={'cart'} >
      <img
          id="cart"
          src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg"
          alt="Cart"
        />
      </Link>
      
    </div>
  );
};

export default Cart;
