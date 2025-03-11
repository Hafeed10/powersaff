import React, { useState } from "react";
import "./Product.css";
import product1 from "../../Assets/slider/house-heating-concept-modern-home-gas-fired-boiler-energy-cash-savings-3d-rendering_415584-33.jpg";
import product2 from "../../Assets/slider/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577.jpg";
import product3 from "../../Assets/slider/sungrow-emea-ceTSHQ0qars-unsplash.jpg";
import product4 from "../../Assets/slider/thiru-n-n0gFDrIrTuU-unsplash.jpg";
import SectionsMenu from "../Home/Introduction/SectionsMenu/SectionsMenu";
import MainSlider from "../Home/Introduction/MainSlider/MainSlider";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { src: product1, title: "Solar Water Heaters", category: "Heater" },
    { src: product2, title: "Water Purifier", category: "Purifier" },
    { src: product3, title: "Solar Panel", category: "Solar" },
    { src: product4, title: "Solar LED Street Light", category: "Solar" },
  ];

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="product">
      <div className="introductionContainer">
        <SectionsMenu />
        <div className="line" />
        <MainSlider />
        <div />
      </div>

      <div className="hed">
        <h1>Products</h1>
      </div>

      <div className="barsection">
        <ul>
          {["All", "Heater", "Purifier", "Solar"].map((category, index) => (
            <li key={index}>
              <button
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="images">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div className="image-box" key={index}>
              <img src={item.src} alt={item.title} />
              <div className="text">
                <h2>{item.title}</h2>
                <h3>{item.category}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Product;
