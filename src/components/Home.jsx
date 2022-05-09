import React from "react";

// Component import
import Banner from "./Banner";
import Value from "./Value";
import Testimonials from "./Testimonials";
import Products from "./Products";
import BackToTop from "./BackToTop";
import Newsletter from "./Newsletter";

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
