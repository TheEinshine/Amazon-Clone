import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = (props) => {

  return <div className="product">
    <div>
        <p>{props.Product.id}</p>
    </div>
    <img id="itemImg" src={
        props.Product.image !== 'N/A' ? props.Product.image
        : "https://via.placeholder.com/400"
    } alt="Product Image" />
    <div>
        
        <h3>{props.Product.title}</h3>
        <span>{props.Product.description.slice(0,80)}</span>
    </div>
    <div>
    <h3>${props.Product.price}</h3>
    <AddToCart id = {props.Product.id} />
    </div>
  </div>;
};

export default ProductCard;
