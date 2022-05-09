import React from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

// CSS
import "../css/backToTop.css";

const BackToTop = () => {
  const [scrollUp, setScrollUp] = useState(false);
  //   const toTopBtn = document.querySelector("top-btn")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  //   function to scroll up
  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  return (
    <>
      {scrollUp && (
        <div href="#tp" className="top-btn" onClick={toTop}>
          <FaArrowUp />
        </div>
      )}
    </>
    // <button className="to-top-but">
    //   <a href="#top">Go to Top</a>
    // </button>
  );
};

export default BackToTop;
