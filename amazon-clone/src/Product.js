import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p> The lean start up</p>
        <p className="product_price">
          <small>$ </small>
          <strong>2099</strong>
        </p>

        <div className="product_rateing">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src="" alt=""/>
    </div>
  );
}

export default Product;
