import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      <button onClick={() => dispatch(add(product))} className="btn">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
