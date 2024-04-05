import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import CheckoutPage from "./CheckoutPage";

const Cart = ({ cart, products, setCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [cartDetails, setCartDetails] = useState([]);

  const getAllItemDetails = (cart) => {
    return cart.map((item) => {
      const details = products.find((product) => product.id === item.productId);
      if (details) {
        return {
          ...details,
          quantity: item.quantity,
        };
      }
    });
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
    const cartDetails = getAllItemDetails(cart);
    setCartDetails(cartDetails);
  }, [cart, products]);

  const handleCheckout = () => {
    <CheckoutPage />;
  };

  return (
    <>
      <div>
        <h1>ShoppingCart</h1>
        <p>Total Items: {totalItems}</p>
        {cartDetails.map((item) => {
          return (
            <CartItemCard
              cart={cart}
              id={item?.id}
              key={item?.productId}
              cartItem={item}
              quantity={item?.quantity}
              setCart={setCart}
            />
          );
        })}
        <p>Subtotal: {isNaN(subTotal) ? "$0:00" : `$${subTotal.toFixed(2)}`}</p>
        <hr></hr>
        <button onClick={handleCheckout}>CHECK OUT</button>
        <CheckoutPage />
      </div>
    </>
  );
};
export default Cart;
