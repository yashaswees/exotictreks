import React from "react";
import nepalImg from "../assets/nepal1.jpg";
import indiaImg from "../assets/india1.jpg";
import bhutanImg from "../assets/bhutan1.jpg";

const destinations = [
  {
    name: "Nepal",
    img: nepalImg,
    description:
      "Explore the Himalayas, ancient temples, and vibrant traditions.",
  },
  {
    name: "India",
    img: indiaImg,
    description:
      "From the Taj Mahal to spiritual retreats, India offers diversity in every step.",
  },
  {
    name: "Bhutan",
    img: bhutanImg,
    description:
      "Discover peaceful monasteries, dramatic landscapes, and timeless charm.",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="container my-5">
      <h2 className="text-center fw-bold mb-5 display-5">Top Destinations</h2>
      <div className="row g-4">
        {destinations.map((dest, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 destination-card overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={dest.img}
                  className="card-img-top img-hover rounded-top-4"
                  alt={dest.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">{dest.name}</h5>
                <p className="card-text text-muted">{dest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
