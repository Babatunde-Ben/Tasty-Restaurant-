import React from "react";

// Component import
import Banner from "../components/Banner";
import Value from "../components/Value";
import Testimonials from "../components/Testimonials";
import Products from "./Products";
import BackToTop from "../components/BackToTop";
import Newsletter from "../components/Newsletter";
import useScrollUp from "../hooks/useScrollUp";

// styles import
import "../css/home.css";

const Home = () => {
  useScrollUp();

  return (
    <>
      <Banner text={"Explore"} />

      <Value />
      <div>
        <BackToTop />
        <Products />
      </div>
      <Testimonials />

      <Newsletter />
    </>
  );
};

export default Home;
