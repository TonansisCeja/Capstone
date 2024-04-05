import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Categories";

const CategoriesDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const options = [
    "all products",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "all products") {
      navigate("/");
    } else {
      navigate(`/categories/${event.target.value}`);
    }
  };
  return (
    <div className="dropdown-container">
      <label htmlFor="category" className="label">
        Choose a category;
      </label>

      <select
        value={selectedOption}
        onChange={handleChange}
        className="select"
        id="category"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option} className="option">
              {option}
            </option>
          );
        })}
      </select>
      <p>Selected category: {selectedOption}</p>
    </div>
  );
};

export default CategoriesDropdown;
