import React from "react";
// Image import
import value from "../img/meal-1.jpg";
import "../css/value.css";

const Value = () => {
  return (
    <section className="value">
      <div>
        <h2 className="custom-title">
          Why Tasty? <span></span>
        </h2>
        <p className="value-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum amet
          accusamus voluptatibus cum rerum ipsam ad optio laudantium aut. Iste,
          ab consequuntur veniam reprehenderit tempore enim! Saepe placeat ea
          distinctio velit reprehenderit, cum eum officia reiciendis nemo
          obcaecati sint nesciunt. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Repellat, explicabo
        </p>
      </div>
      <div>
        <img src={value} alt="" />
      </div>
    </section>
  );
};

export default Value;
