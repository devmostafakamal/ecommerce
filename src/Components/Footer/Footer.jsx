import React from "react";
import "./Footer.css";
const facebook = "/assets/facebook.png";
const whatsapp = "/assets/whatsapp.png";
const instagram = "/assets/instagram.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="fotter-logo">
        <p>SHOPPRER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="fotter-icon-container">
          <img src={facebook} width={40} height={40} />
        </div>
        <div className="fotter-icon-container">
          <img src={whatsapp} width={40} height={40} />
        </div>
        <div className="fotter-icon-container">
          <img src={instagram} width={40} height={40} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024</p>
      </div>
    </div>
  );
}
