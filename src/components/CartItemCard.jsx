import React from "react";
import "./CartItemCard.css";

export const CartItemCard = ({ cartItem, quantity, onIncrement }) => {
  console.log("cartItem", cartItem);

  <div>CartItemCard</div>;

  return (
    <div className="cart-item-card">
      <div className="cart-image-container">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="cart-item-image"
        />
      </div>

      <div className="cart-item-details">
        <h3>{cartItem?.title}</h3>
        <p>Price: ${cartItem?.price}</p>
        <p> Quantity:{quantity}</p>
      </div>
      <div className="quantity-buttons">
        <button className="quantity-button">+</button>
        <button className="quantity-button">-</button>
      </div>
    </div>
  );
};
