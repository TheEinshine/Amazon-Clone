import React, { useContext } from 'react'
import { mainData } from './App'

const CheckOut = () => {
    let sum = 0;
    const {cart,products} = useContext(mainData);
    for( let c of cart) {
       sum += products.find(e => e.id === c ).price;
       console.log(sum);
    }
  return (
    <div>

    <h1>CheckOut</h1>   
    <h2>Total = {sum}</h2>
    <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
     </div>
    </div>
  )
}

export default CheckOut
