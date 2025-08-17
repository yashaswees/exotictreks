import React from "react";
import { useTranslation } from "react-i18next";
import nepalImg from "../assets/nepal1.jpg";
import indiaImg from "../assets/india1.jpg";
import bhutanImg from "../assets/bhutan1.jpg";

const destinations = [
  {
    name: "Nepal",
    img: nepalImg,
    descriptionKey: "destinations.nepalDesc",
  },
  {
    name: "India",
    img: indiaImg,
    descriptionKey: "destinations.indiaDesc",
  },
  {
    name: "Tibet",
    img: bhutanImg,
    descriptionKey: "destinations.bhutanDesc",
  },
];

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <section id="destinations" className="container my-5">
      <h2 className="text-center fw-bold mb-5 ">
        {t("destinations.title")}
      </h2>
      <div className="row g-4">
        {destinations.map((dest, index) => (
          <div key={index} className="col-md-4">
            <div
              className="rounded-2 overflow-hidden position-relative"
              style={{
                height: "350px",
                backgroundImage: `url(${dest.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
