import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      {/* <About /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
