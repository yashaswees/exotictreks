import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ABC from "./pages/plans/ABC";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "react-image-lightbox/style.css";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
        <Route exact path="/about-us" element={<About />}></Route>
        <Route
          exact
          path="/plans/annapurna-base-camp-trek"
          element={<ABC />}
        ></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
