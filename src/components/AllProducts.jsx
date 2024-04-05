import React from "react";
import ProductDetails from "./ProductDetails";

const AllProducts = ({ products, cart, setCart }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductDetails
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
};
export default AllProducts;
