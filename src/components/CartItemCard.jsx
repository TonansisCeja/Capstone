import React from "react";
import "./CartItemCard.css";
import {
  addCartItem,
  removeCartItem,
  editCartItemQuantity,
} from "../Utils/helpers";

const CartItemCard = ({ cartItem, quantity, cart, setCart, id }) => {
  console.log(quantity, "quantity");
  const handleIncrement = () => {
    setCart(addCartItem(cart, id));
  };

  const handleDecrement = () => {
    setCart(removeCartItem(cart, id));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    setCart(editCartItemQuantity(cart, id, newQuantity));
  };

  return (
    <div className="cart-card">
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
        <select value={quantity} onChange={handleQuantityChange}>
          {[...Array(30).keys()].map((index) => (
            <option key={index}>{index + 1}</option>
          ))}
        </select>
      </div>
      <div className="quantity-buttons">
        <button className="quantity-button" onClick={handleIncrement}>
          +
        </button>
        <button className="quantity-button" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};
export default CartItemCard;
