import React, {  useContext } from "react";

import "../styles/Button.css";
import { mainData } from "./App";



const AddToCart = (e) => {
  const randomVar = useContext(mainData);
 
  
 const clicker=()=>{
  
   let x =  randomVar.cart.find(d =>{
    return d === e.id;
    
  }
  
  )
  if(x === undefined) {
    
    randomVar.setCart([...randomVar.cart,e.id])
   
   //  console.log(randomVar.cart);
  }
  }

  let text = "Add to Cart";
  return (
    <>
        <button 
         onClick={clicker}
          style={{ padding: "3%" }}
          className="bn"
        >
          {text}
        </button>
    </>
  );
};

export default AddToCart;
