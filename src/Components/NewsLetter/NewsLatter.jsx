import React from "react";
import "./NewsLatter.css";
export default function NewsLatter() {
  return (
    <div className="newslatter">
      <h1>Get Exclucive Offer On Your Email</h1>
      <p>Subscribe to our newslatter and stay update</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button>Subsribe</button>
      </div>
    </div>
  );
}
