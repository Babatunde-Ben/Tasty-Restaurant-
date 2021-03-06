import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState("static");

  const openCloseNav = () => {
    setIsOpen(!isOpen);
  };

  // dynamically make the navbar sticky on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setStickyNavbar("fixed");
      } else {
        setStickyNavbar("static");
      }
    });
  }, []);

  // dynamically change the styling of the navbar on scroll
  useEffect(() => {
    const navbarElement = document.querySelector(".Navbar");
    if (stickyNavbar === "fixed") {
      navbarElement.classList.add("sticky");
    } else {
      navbarElement.classList.remove("sticky");
    }
  }, [stickyNavbar]);

  return (
    <div className="Navbar" style={{ position: stickyNavbar }}>
      <Link to={"/"}>
        <span className="nav-logo">Tasty</span>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/" className="link" onClick={openCloseNav}>
          HOME
        </Link>
        <Link to="/about" className="link" onClick={openCloseNav}>
          ABOUT
        </Link>
        <Link to="/products" className="link" onClick={openCloseNav}>
          PRODUCTS
        </Link>
        <Link to="/contact" className="link" onClick={openCloseNav}>
          CONTACT
        </Link>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={openCloseNav}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
