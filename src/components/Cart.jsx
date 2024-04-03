import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import {
  addCartItem,
  removeCartItem,
  editCartItemQuantity,
} from "../Utils/helpers";

const Cart = ({ cart, products, setCart }) => {
  console.log("Cart", cart, "products", products);

  const [subTotal, setSubTotal] = useState(0);

  const getAllItemDetails = (cartItem) => {
    products.find((product) => product.id === cartItem.productId);
  };

  const handleIncrement = (id) => {
    setCart((prevCart) => addCartItem(prevCart, id));
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => removeCartItem(prevCart, id));
  };

  const handleEditQuantity = (id, newQuantity) => {
    setCart((prevCart) => editCartItemQuantity(prevCart, id, newQuantity));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const getTotalCart = () => {
      return cart.reduce((total, item) => {
        const product = products.find(
          (product) => product.id === item.productId
        );
        if (product) {
          return total + product.price * item.quantity;
        }
        return total;
      }, 0);
    };
    const total = getTotalCart();
    setSubTotal(total);
  }, [cart, products]);

  return (
    <div>
      <h1>ShoppingCart</h1>
      <p>Total Items: {totalItems}</p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);

        return (
          <CartItemCard
            key={item.productId}
            cartItem={productItem}
            quantity={item.quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onEdit={handleEditQuantity}
          />
        );
      })}
      <p>Subtotal: {isNaN(subTotal) ? "$0:00" : `$${subTotal.toFixed(2)}`}</p>
    </div>
  );
};
export default Cart;
