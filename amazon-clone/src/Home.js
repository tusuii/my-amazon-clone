import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/TV/Sanyo/SanyoWebBanner01._CB1198675309_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id="123"
            title="The lean startup"
            price={29.99}
            image={"https://m.media-amazon.com/images/I/81vvgZqCskL.jpg"}
            rating={3}
          />
          <Product
            id="7584"
            title="Life's Amazing Secrets: How to find Bala."
            price={30.99}
            image={"https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UL320_.jpg"}
            rating={5}
          />
        </div>

        <div className="home_row">
        <Product
        id="4658"
        title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
        price={15.99}
        image={"https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL320_.jpg"}
        rating={5}
      />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
        </div>
        <div className="home_row">{/*product 1*/}</div>
      </div>
    </div>
  );
}

export default Home;
