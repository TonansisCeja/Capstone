import React from "react";
import "./Cart.css";
import { CartItemCard } from "./CartItemCard";
import { addCartItem } from "../Utils/helpers";

const Cart = ({ cart, products, setCart }) => {
  console.log("Cart", cart, "products", products);

  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const handleIncrement = (id) => {
    //TODO
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items</p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);

        return (
          <CartItemCard
            key={productItem?.id}
            cartItem={productItem}
            quantity={item.quantity}
            onIncrement={handleIncrement}
          />
        );
      })}
    </div>
  );
};
export default Cart;
