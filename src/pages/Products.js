import React from "react";
// import { Outlet } from "react-router-dom";

// Component import
// import meal1 from "../img/meal-1.jpg";
import meal1 from "../img/Sweet_and_Sticky_Chicken_Strips.jpg";
import meal2 from "../img/Fruit_and_Yogurt_Parfait.jpg";
import meal3 from "../img/Toasted_Agnolotti.jpg";
import meal4 from "../img/Asian_Shrimp_Stir-Fry.jpg";
import meal5 from "../img/Tomato_Basil_Chicken.jpg";
import meal6 from "../img/Cooker_Lamb_Curry.jpg";
import meal7 from "../img/BBQ_Mac_and_Cheese.jpg";
import meal8 from "../img/Salmon_with_roasted_vegetables.jpg";
import meal9 from "../img/Chicken_Piccata_with_Artichokes.jpg";

import "../css/products.css";

const productDetails = [
  {
    id: 1,
    name: "Sweet and Sticky Chicken Strips",
    image: meal1,
    price: 2300,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 2,
    name: "Fruit and Yogurt Parfait",
    image: meal2,
    price: 1800,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 3,
    name: "Toasted Agnolotti",
    image: meal3,
    price: 4100,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 4,
    name: "Asian Shrimp Stir-Fry",
    image: meal4,
    price: 1500,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 5,
    name: "Tomato Basil Chicken",
    image: meal5,
    price: 1150,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 6,
    name: "Cooker Lamb Curry",
    image: meal6,
    price: 2100,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 7,
    name: "BBQ Mac and Cheese",
    image: meal7,
    price: 2500,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 8,
    name: "Salmon with vegetables",
    image: meal8,
    price: 2300,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 9,
    name: "Chicken Piccata with Artichokes",
    image: meal9,
    price: 1000,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
];

// display service unavailable
function service() {
  alert("This service is currently unavailable");
}
// component for eact product
const SingleProduct = ({ productDetails }) => {
  const { name, image, desc, price } = productDetails;
  return (
    <div className="single-product">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{desc}</p>
        <div className="order">
          <p className="product-price">&#8358;{price}</p>
          <button
            className="order-btn"
            onClick={() => {
              service();
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
const Products = () => {
  return (
    <section className="product-section">
      <h2 className="custom-title product-title">
        Our Products <span></span>
      </h2>
      <div className="product-list">
        {productDetails.map((item) => {
          return <SingleProduct productDetails={item} key={item.id} />;
        })}
      </div>
      {/* <Outlet /> */}
    </section>
  );
};

export default Products;
