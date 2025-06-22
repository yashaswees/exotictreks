import React from "react";

const Hero = () => {
  return (
    <header
      className="bg-primary text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "70vh",
        padding: "0 20px",
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero.jpg') center/cover no-repeat",
      }}
    >
      <div>
        {/* Tagline */}
        <p className="lead text-uppercase text-white-50 mb-2">
          Explore | Experience | Elevate
        </p>

        {/* Main Title */}
        <h1 className="display-3 fw-bold mb-4">
          Your Next Adventure Awaits
        </h1>

        {/* Description */}
        <p className="lead mb-4">
          Discover breathtaking destinations, curated experiences, and unforgettable journeys across Nepal, India, and Bhutan.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
          <a href="#destinations" className="btn btn-light btn-lg px-4 py-2">
            Explore Destinations
          </a>
          <a href="contact-us" className="btn btn-outline-light btn-lg px-4 py-2">
            Plan Your Trip
          </a>
        </div>

        {/* Stats */}
        <div className="d-flex gap-4 justify-content-center mt-5 flex-wrap text-white-50">
          <div className="text-center">
            <h4 className="fw-bold mb-0 text-white">20+</h4>
            <small>Years of Experience</small>
          </div>
          <div className="text-center">
            <h4 className="fw-bold mb-0 text-white">1000+</h4>
            <small>Happy Travelers</small>
          </div>
          <div className="text-center">
            <h4 className="fw-bold mb-0 text-white">3</h4>
            <small>Exotic Countries</small>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <a href="#destinations" className="mt-5 d-inline-block">
          <i className="bi bi-chevron-double-down text-white fs-3"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;
