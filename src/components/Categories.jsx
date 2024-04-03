import React from "react";
import { useParams } from "react-router";
import ProductDetails from "./ProductDetails";

const Categories = ({ products, setCart, cart }) => {
  const { categoryItem } = useParams();
  const filteredCategories = products.map((product) => {
    if (product.category === categoryItem) {
      return (
        <ProductDetails
          key={product.id}
          product={product}
          setCart={setCart}
          cart={cart}
        />
      );
    }
  });
  return <div>{filteredCategories}</div>;
};

export default Categories;
