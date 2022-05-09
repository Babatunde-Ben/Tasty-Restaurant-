import React from "react";
import { Link } from "react-router-dom";
import "../css/error.css";
import errorImage from "../img/error.svg";

const Error = () => {
  return (
    <section
      className="error-section
	"
    >
      <img src={errorImage} className="errorImage" alt="" />
      <h3 className="error-message">Page not found</h3>
      <Link to="/" className="back-home">
        back to home page
      </Link>
    </section>
  );
};

export default Error;
