import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component import
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Product from "./components/Product";
import Products from "./pages/Products";

// CSS import
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="Tasty-Restaurant-">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route index path="/products" element={<Product />} />
            <Route path="/products/:productId" element={<Product />} />
          </Route>
          <Route path={"*"} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
