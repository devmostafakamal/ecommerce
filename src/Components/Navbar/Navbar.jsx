import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <img
        className="img1"
        src="/assets/frontend_assets/cart_icon.png"
        alt=""
      />
      <p>Shopper</p>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link className={menu === "shop" ? "active" : ""} to="/">
            {" "}
            Shop
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link className={menu === "mens" ? "active" : ""} to="/mens">
            {" "}
            Men
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link className={menu === "womens" ? "active" : ""} to="/womens">
            {" "}
            Women
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className={menu === "kids" ? "active" : ""} to="/kids">
            {" "}
            Kids
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("cart");
          }}
        >
          <Link className={menu === "cart" ? "active" : ""} to="/cart">
            {" "}
            cart
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>{" "}
      </div>{" "}
      <div className="cart">
        <img
          className="img2"
          src="/assets/frontend_assets/download.png"
          alt=""
        />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
