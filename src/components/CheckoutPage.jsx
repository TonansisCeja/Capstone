import React, { useState } from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //handle form submisssion here, e.g. send data to server
    console.log(formData);
  };

  return (
    <div className="checkout-page">
      <form onSubmit={handleSubmit}>
        <input
          id="fname"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />

        <input
          id="lname"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />

        <input
          id="Zp"
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />

        <input
          id="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          required
        />

        <input
          id="Adsress"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="address"
          required
        />

        <input
          id="Country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />

        <button
          type="submit"
          onClick={() => {
            handleSubmit;
          }}
        >
          {" "}
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
