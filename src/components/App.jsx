import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AllProducts from "./AllProducts";
import { getAllProducts } from "../API";
import SingleProduct from "./SingleProduct";
import CheckoutPage from "./CheckoutPage";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart" || []))
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user" || null))
  );

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

  //every time token changes will run this code
  //if we have a token then store it in local storage
  //otherwise remove token
  // then stringify user then save to const userObj then save it
  // local storage. do same with cart
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartArr = JSON.stringify(cart);
      localStorage.setItem("cart", cartArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token]);

  console.log(products);

  return (
    <div>
      <NavBar token={token} setToken={setToken} />{" "}
      {/* if there's a token then login else not logged in */}
      <Routes>
        {/**/}
        <Route
          path="/"
          element={
            <AllProducts products={products} cart={cart} setCart={setCart} />
          }
        />
        {/* passing down setToken to the Login component */}

        {/* passing setUser and setCart variable to login*/}
        <Route
          path="/login"
          element={
            <Login setToken={setToken} setUser={setUser} setCart={setCart} />
          }
        />
        {/* path call the SingleProduct component*/}
        <Route
          path="/:productId"
          element={<SingleProduct cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<cart cart={cart} products={products} setCart={setCart} />}
        />

        <Route path="/CheckoutPage" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};
export default App;
