import React, { useContext } from "react";
import "./ProductDisplay.scss";

import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="right-star">
          {/* <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" /> */}
          <p>(122)</p>
        </div>
        <div className="right-prices">
          <div className="right-price-old">${product.old_price}</div>
          <div className="right-price-new">${product.new_price}</div>
        </div>
        <div className="description">this all products is yours</div>
        <div className="size">
          <h1>select size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="category">
          <span> Category:</span> Women,T-shirt,Crop Top
        </p>
      </div>
    </div>
  );
}
