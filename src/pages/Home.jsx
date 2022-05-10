import React from "react";

// Component import
import Banner from "../components/Banner";
import Value from "../components/Value";
import Testimonials from "../components/Testimonials";
import Products from "./Products";
import BackToTop from "../components/BackToTop";
import Newsletter from "../components/Newsletter";

// styles import
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Banner text={"Explore"} />
      <Value />
      <Testimonials />

      <div>
        <BackToTop />
        <Products />
      </div>
      <Newsletter />
    </>
  );
};

export default Home;
