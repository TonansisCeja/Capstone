import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../Utils/helpers";

const ProductDetails = ({ product, isSingle, cart, setCart }) => {
  console.log("cart", cart);
  const navigate = useNavigate();

  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };

  const handleAddToCart = () => {
    const productId = product.id;

    setCart(addCartItem(cart, productId));
  };

  //              if the product already exists in the cart
  //               const existingCartItemIndex = cart.findIndex(
  //               (item) => item.productId === productId
  //                 );
  //               if (existingCartItemIndex !== -1) {
  //                 makes a copy of our existing cart
  //                 const updatedCart = [...cart];
  //                update the quantity
  //                updatedCart[existingCartItemIndex].quantity += 1;
  //                setCart(updatedCart);
  //                } else {
  //                if the new product is not in the cart add it with the quantity
  //                const newItem = { productId, quantity: 1 };
  //                setCart((prevCart) => [...prevCart, newItem]);
  //                }

  // console.log("isSingle", isSingle);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        {isSingle && <p className="card-description">{product.description}</p>}
        <p className="card-price">${product.price}</p>
        <button className="card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <br></br>
        <br></br>
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
