import React, { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../../Context/ShopContext";

const cross = "/assets/cross.png";

export default function CartItems() {
  const { cart, removeFromCart, calculateTotalPrice } = useContext(ShopContext);

  // Convert the cart object into an array of products

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.values(cart).length > 0 ? (
        Object.values(cart).map((item) => (
          <div key={item.id}>
            <div className="cartitems-format">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.new_price}</p>
              <button className="cartitems-quantity">{item.quantity}</button>
              <p>{item.new_price * item.quantity}</p>
              <img
                className="remove-icon"
                src={cross}
                height={20}
                width={20}
                alt="Remove item"
                onClick={() => {
                  removeFromCart(item.id);
                }}
              />
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="cartitems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shopping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${calculateTotalPrice()}</h3>
            </div>
          </div>
          <button>PROCED TO CHEAKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>if you have a promo code, enter it here</p>
          <div className="cartitems-prompbox">
            <input type="text" placeholder="promocode" />
          </div>
        </div>
      </div>
    </div>
  );
}
