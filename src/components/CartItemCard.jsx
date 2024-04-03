import React from "react";
import "./CartItemCard.css";

const CartItemCard = ({
  cartItem,
  quantity,
  onIncrement,
  onDecrement,
  onEdit,
}) => {
  console.log("cartItem", { cartItem });

  const handleIncrement = () => {
    onIncrement(cartItem.id);
  };

  const handleDecrement = () => {
    onDecrement(cartItem.id);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    onEdit(cartItem.id, newQuantity);
  };

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
        <select value={quantity} onChange={handleQuantityChange}>
          {[...Array(30).keys()].map((index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
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
