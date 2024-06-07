import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  //get all product from backend
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/products/products")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
