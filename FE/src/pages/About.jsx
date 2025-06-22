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

function About() {
  return (
    <>
      <Navbar />
      <div className="about-us">
        {/* About Us */}
        <section style={{ backgroundColor: "#f8f9fa" }} className="py-5">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fw-bold">About Us</h2>
              <div className="title-underline mx-auto"></div>
            </div>
            <p
              className="lead text-center mx-auto"
              style={{ maxWidth: "1000px" }}
            >
              Exotic Treks & Expeditions has been guiding adventurers through
              Nepal, Tibet, and India for over 20 years. Our team of local
              experts ensures safe, immersive, and sustainable journeys for
              travelers from around the world.
              <p className="fs-5 text-start">
                Founded in 1999 by a group of passionate local guides, Exotic
                Treks & Expeditions has grown into one of the most respected
                adventure travel companies in Nepal. With a deep-rooted
                connection to the Himalayas and the communities that live among
                them, our team is dedicated to providing authentic, safe, and
                sustainable trekking experiences.
              </p>
              <p className="fs-5 text-start">
                Our goal is to make every journey meaningful — not just for the
                travelers, but also for the local communities we work with. By
                promoting responsible tourism, we aim to preserve the
                breathtaking natural beauty of the region while uplifting the
                lives of the people who call it home.
              </p>
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          style={{ backgroundColor: "#0d2c50", color: "#ffffff" }}
          className="py-5"
        >
          <div className="container">
            <h3 className="text-center fw-bold mb-5">Why Choose Us</h3>
            <div className="row g-4">
              {[
                {
                  icon: <FaLeaf />,
                  label: "Carbon Friendly",
                  desc: "Eco-conscious travel that supports sustainable tourism.",
                  color: "#28a745",
                },
                {
                  icon: <FaUsers />,
                  label: "Experienced Local Guides",
                  desc: "Treks led by certified, knowledgeable local experts.",
                  color: "#0dcaf0",
                },
                {
                  icon: <FaMountain />,
                  label: "1000+ Treks Organized",
                  desc: "A trusted partner for thousands of successful expeditions.",
                  color: "#ffc107",
                },
                {
                  icon: <FaHandsHelping />,
                  label: "24/7 Travel Assistance",
                  desc: "Always here to support your journey, day or night.",
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
            <h3 className="text-center fw-bold mb-5">What Our Travelers Say</h3>
            <div className="row g-4">
              {[
                {
                  name: "Didier SOMMIER",
                  country: "France",
                  feedback:
                    "Une agence au top ! Accueil formidable a l'arrivée a Katmandou. Les guides ainsi que les reponsables de l'agence font leur maximum pour que séjour corresponde à vos attentes, et a des tarifs très raisonnables. On se sent comme en famille quand le voyage est terminé et on se demande déjà quand on pourra revenir. Je recommande vivement :)",
                },
                {
                  name: "André Decourt",
                  country: "France",
                  feedback:
                    "Une agence francophone au top qui se met en quatre pour satisfaire sa clientèle fidèle..nous sommes en sécurité totale dès l'arrivée à l'aéroport jusqu'au départ il n'y a qu'à se laisser faire tout est organisé aux petits oignons..Merci à Pradip et toute son équipe associés guides porteurs qui nous ont fait passer des moments inoubliables depuis plusieurs années.",
                },
                {
                  name: "Sylvie Fouquet",
                  country: "France",
                  feedback:
                    "Des circuits préparés avec soin,des guides au top,s' assurant de votre confort ,ou s 'inquiétant de vos besoins.première expérience pour moi,et sûrement pas la dernière.",
                },
              ].map((t, index) => (
                <div className="col-md-4" key={index}>
                  <div className="p-4 shadow-sm border rounded h-100 bg-light">
                    <p className="fst-italic text-muted mb-3">"{t.feedback}"</p>
                    <h6 className="fw-semibold mb-0">{t.name}</h6>
                    <small className="text-muted">{t.country}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section py-5 bg-white">
          <div className="container">
            <h3 className="text-center fw-bold mb-5">Gallery</h3>

            <div
              className="d-flex align-items-center justify-content-between"
              style={{ gap: "20px" }}
            >
              {/* Gallery Images grid */}
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

              {/* Arrow button on the right */}
              <NavLink
                to="/gallery"
                style={{ transition: "all 0.3s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.querySelector("svg").style.transform =
                    "translateX(6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.querySelector("svg").style.transform =
                    "translateX(0)")
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
