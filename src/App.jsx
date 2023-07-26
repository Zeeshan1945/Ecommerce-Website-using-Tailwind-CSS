import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./modules/Home";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./modules/SingleProduct";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
