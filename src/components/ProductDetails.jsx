import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product, isSingle }) => {
  const navigate = useNavigate();

  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };

  console.log("isSingle", isSingle);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        {isSingle && <p className="card-description">{product.description}</p>}
        <p className="card-price">${product.price}</p>
        <button className="card-button">Add to Cart</button>
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
