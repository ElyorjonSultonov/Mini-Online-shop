import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Products.css";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productData = async () => {
    await axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.data));
  };
  useEffect(() => {
    productData();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <h4>💲 {product.price}</h4>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
