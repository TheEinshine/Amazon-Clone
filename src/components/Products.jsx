import React, { useContext, useEffect, useState } from "react";
import "../styles/Products.css";
import { mainData } from "./App";
import ProductCard from "./ProductsCard";

const Product = () => {

  const {products,setProducts} = useContext(mainData);

  useEffect(() => {
    if(products.length === 0) {
    let url =
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
      });
    }
  }, []);
  // const [products, setProducts] = useState([]);
  

  return (
    <div className="container">
      {products.map((q,i) => (
        <ProductCard key={i} Product={q} />
      ))}
    </div>
  );
};

export default Product;
