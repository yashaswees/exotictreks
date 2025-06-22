import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoogleTranslate from "./googleTranslate";
import About from "./pages/About";
import ABC from "./pages/plans/ABC";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "react-image-lightbox/style.css";

const App = () => {
  return (
    <>
      <GoogleTranslate />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
        <Route exact path="/about-us" element={<About />}></Route>
        <Route exact path="/plans/annapurna-base-camp-trek" element={<ABC />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </>
  );
};

export default App;
