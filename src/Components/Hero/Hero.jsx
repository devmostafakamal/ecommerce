import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ADDITION ONLY</h2>
      </div>
      <div className="txt">
        <p>Collection</p>
        <p>for every one </p>
      </div>

      <div className="hero-right">
        <img src="/assets/frontend_assets/p_img1.png" alt="" />
      </div>
      <div className="latest">
        <button>latest</button>
      </div>
    </div>
  );
}
