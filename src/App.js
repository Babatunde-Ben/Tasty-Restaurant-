import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component import
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import Wrapper from "./components/Wrapper";
import Product from "./components/Product";
import Products from "./components/Products";

// CSS import
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="rgp-73-store">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route index path="/products" element={<Product />} />
            <Route
              path="/products/:productId"
              element={<Product />}
            />
          </Route>
          <Route path={"*"} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
