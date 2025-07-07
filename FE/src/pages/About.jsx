import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaLeaf,
  FaUsers,
  FaMountain,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="about-us">
        {/* About Us */}
        <section style={{ backgroundColor: "#f8f9fa" }} className="py-5">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fw-bold">{t("about.title")}</h2>
              <div className="title-underline mx-auto"></div>
            </div>
            <p className="lead text-center mx-auto" style={{ maxWidth: "1000px" }}>
              {t("about.intro")}
              <p className="fs-5 text-start">{t("about.story")}</p>
              <p className="fs-5 text-start">{t("about.goal")}</p>
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          style={{ backgroundColor: "#0d2c50", color: "#ffffff" }}
          className="py-5"
        >
          <div className="container">
            <h3 className="text-center fw-bold mb-5">{t("about.whyChooseUs.title")}</h3>
            <div className="row g-4">
              {[
                {
                  icon: <FaLeaf />,
                  label: t("about.whyChooseUs.carbon.label"),
                  desc: t("about.whyChooseUs.carbon.desc"),
                  color: "#28a745",
                },
                {
                  icon: <FaUsers />,
                  label: t("about.whyChooseUs.guides.label"),
                  desc: t("about.whyChooseUs.guides.desc"),
                  color: "#0dcaf0",
                },
                {
                  icon: <FaMountain />,
                  label: t("about.whyChooseUs.treks.label"),
                  desc: t("about.whyChooseUs.treks.desc"),
                  color: "#ffc107",
                },
                {
                  icon: <FaHandsHelping />,
                  label: t("about.whyChooseUs.support.label"),
                  desc: t("about.whyChooseUs.support.desc"),
                  color: "#fd7e14",
                },
              ].map((item, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div
                    className="card h-100 text-center p-4 border-0 shadow-sm"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#212529",
                      transition: "transform 0.3s",
                      borderRadius: "1rem",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-6px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: `${item.color}1A`,
                        color: item.color,
                        fontSize: "1.8rem",
                      }}
                    >
                      {item.icon}
                    </div>
                    <h6 className="fw-bold mb-2">{item.label}</h6>
                    <p className="small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          style={{ backgroundColor: "#ffffff" }}
          className="py-5 border-top"
        >
          <div className="container">
            <h3 className="text-center fw-bold mb-5">{t("about.testimonials.title")}</h3>
            <div className="row g-4">
              {[
                {
                  name: "Didier SOMMIER",
                  country: "France",
                  feedback: t("about.testimonials.feedback1"),
                },
                {
                  name: "André Decourt",
                  country: "France",
                  feedback: t("about.testimonials.feedback2"),
                },
                {
                  name: "Sylvie Fouquet",
                  country: "France",
                  feedback: t("about.testimonials.feedback3"),
                },
              ].map((tItem, index) => (
                <div className="col-md-4" key={index}>
                  <div className="p-4 shadow-sm border rounded h-100 bg-light">
                    <p className="fst-italic text-muted mb-3">"{tItem.feedback}"</p>
                    <h6 className="fw-semibold mb-0">{tItem.name}</h6>
                    <small className="text-muted">{tItem.country}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section py-5 bg-white">
          <div className="container">
            <h3 className="text-center fw-bold mb-5">{t("about.galleryTitle")}</h3>

            <div className="d-flex align-items-center justify-content-between" style={{ gap: "20px" }}>
              <div className="row mb-0 flex-grow-1">
                {["gallery1", "gallery2", "gallery3"].map((img, idx) => (
                  <div className="col-md-4 col-sm-6" key={idx}>
                    <div className="ratio ratio-4x3 overflow-hidden rounded shadow-sm">
                      <img
                        src={`/images/${img}.jpg`}
                        alt={`Gallery ${idx + 1}`}
                        className="img-fluid object-fit-cover gallery-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <NavLink
                to="/gallery"
                style={{ transition: "all 0.3s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.querySelector("svg").style.transform = "translateX(6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.querySelector("svg").style.transform = "translateX(0)")
                }
              >
                <FaArrowRight
                  style={{
                    transition: "transform 0.3s ease",
                    fontSize: "1.5rem",
                  }}
                />
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
