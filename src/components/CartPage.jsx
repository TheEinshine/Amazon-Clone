import React, { useContext, useEffect, useState } from "react";
import { mainData } from "./App";
import CheckOut from "./CheckOut";
import ProductCard from "./ProductsCard";

const CartPage = () => {
  useEffect(() => {
    for (let c of cart) {
      let a = products.find((product) => {
        // console.log(product.id === c);
        return product.id === c;
      });

      if (a !== undefined) {
        pusher.push(a);
      }
    }
    setter(pusher);
  }, []);

  const [set, setter] = useState([]);
  let pusher = [];
  const { products, cart, setCart} = useContext(mainData);
  

  const clicked = (e, i) => {
    setCart(cart.filter((x)=>{
     return  x !== set[i].id;
    }));
    setter(
      set.filter((v, idx) => {
        return i !== idx;
      })
    );
  };

  return (
    <div>
    <div className="container">
      {set.map((q, i) => (
        <div key={i}>
          <ProductCard key={i} Product={q} />
          <button
            onClick={(e) => {
              clicked(e, i);
            }}
            id={i}
            className="button-8"
            role="button"
          >
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
    <div>
    <br />
    <br />
      <CheckOut/> 
    </div>
    </div>
  );
};

export default CartPage;
