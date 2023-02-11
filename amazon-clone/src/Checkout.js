import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Store-banner-web.jpg"
          alt=""
        ></img>

        <div>
          <h1 className="checkout_title">Your shopping basket!</h1>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
