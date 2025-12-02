import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import nepalImg from "../assets/nepal1.jpg";
import indiaImg from "../assets/india1.jpg";
import bhutanImg from "../assets/bhutan1.jpg";

const destinations = [
  {
    name: "Nepal",
    img: nepalImg,
    descriptionKey: "destinations.nepalDesc",
    link: "/plans/visit-nepal",
  },
  {
    name: "India",
    img: indiaImg,
    descriptionKey: "destinations.indiaDesc",
    link: "/plans/visit-india",
  },
  {
    name: "Tibet",
    img: bhutanImg,
    descriptionKey: "destinations.bhutanDesc",
    link: "/plans/visit-tibet",
  },
];

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <section id="destinations" className="container my-5">
      <h1 className="text-center fw-bold mb-5 ">
        {t("destinations.title")}
      </h1>
      <div className="row g-4">
        {destinations.map((dest, index) => (
          <div key={index} className="col-md-4">
            <Link to={dest.link} className="text-decoration-none">
              <div
                className="rounded-2 overflow-hidden position-relative"
                style={{
                  height: "350px",
                  backgroundImage: `url(${dest.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)",
                  }}
                />

                {/* Text content */}
                <div
                  className="position-absolute bottom-0 start-0 text-white p-3"
                  style={{ zIndex: 2 }}
                >
                  <p className="mb-1 small fw-semibold text-uppercase">
                  </p>
                  <h5 className="fw-bold">{dest.name}</h5>
                  <p className="mb-0 small">{t(dest.descriptionKey)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
