import React, { useState, useEffect } from "react";
import { getSingleProduct } from "../API";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProduct(productId);
      setProduct(product);
    };
    fetchSingleProduct();
  }, [productId]); //run code when product id changes

  if (!product) {
    return <h1> loading......</h1>;
  }
  return product && <ProductDetails product={product} isSingle />; //when product true then display
};

export default SingleProduct;
