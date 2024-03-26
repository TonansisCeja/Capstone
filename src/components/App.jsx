import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AllProducts from "./AllProducts";
import { getAllProducts } from "../API";

import SingleProduct from "./SingleProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  // to get all data
  //useEffect takes 2 arguement one function and a dependency array

  useEffect(() => {
    const fetchAllProducts = async () => {
      //calling getAllProducts which fetches all products
      //waits to get all data then assigned result to products
      const products = await getAllProducts();
      // sets products to setProducts
      setProducts(products);
    };
    fetchAllProducts();
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token" || null));
  //every time token changes will run this code
  //if we have a token then store it in local storage
  //otherwise remove token

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  console.log(products);

  return (
    <div>
      <NavBar token={token} setToken={setToken} />{" "}
      {/* if there's a token then login else not logged in */}
      <Routes>
        <Route path="/" element={<AllProducts products={products} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />{" "}
        {/* passing down setToken */}
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default App;
