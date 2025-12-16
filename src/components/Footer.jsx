"use client";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="border-top"
      style={{
        background: "white",
        minHeight: "auto",
      }}
    >
      <div className="container pt-5 pb-4">
        <div className="row gy-4 justify-content-between">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-3 text-dark">
              {t("footer.companyName")}
            </h4>
            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              {t("footer.description")}
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/exotiquenepal"
                aria-label="Facebook"
                className="text-primary"
                style={{ fontSize: "1.5rem", transition: "opacity 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                <CiFacebook />
              </a>
              <a
                href="mailto:exotictreck@yahoo.com"
                aria-label="Email"
                className="text-primary"
                style={{ fontSize: "1.5rem", transition: "opacity 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                <MdAlternateEmail />
              </a>
              <a
                href="https://wa.me/9779841554895"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success"
                style={{ fontSize: "1.5rem", transition: "opacity 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                <FaWhatsapp />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3 text-dark">{t("footer.quickLinks")}</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-muted text-decoration-none"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.home")}
                </a>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `text-muted text-decoration-none${isActive ? " text-primary" : ""}`
                  }
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.about")}
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `text-muted text-decoration-none${isActive ? " text-primary" : ""}`
                  }
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.blogs")}
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `text-muted text-decoration-none${isActive ? " text-primary" : ""}`
                  }
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.contact")}
                </NavLink>
              </li>
            </ul>
          </div>



          {/* Contact Info */}
          <div className="col-lg-3 col-md-12">
            <h6 className="fw-bold mb-3 text-dark">
              {t("footer.contactTitle")}
            </h6>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="text-primary me-3" size={16} />
                <a
                  href="https://maps.app.goo.gl/GsMc7krxVEDPLgeN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-decoration-none"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.location")}
                </a>
              </div>

              <div className="d-flex align-items-center">
                <MdPhone className="text-primary me-3" size={16} />
                <a
                  href="tel:+9779841554895"
                  className="text-muted text-decoration-none"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.phone")}
                </a>
              </div>

              <div className="d-flex align-items-center">
                <IoMail className="text-primary me-3" size={16} />
                <a
                  href="mailto:exotictreck@yahoo.com"
                  className="text-muted text-decoration-none"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "#6c757d")}
                >
                  {t("footer.email")}
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-dark">Certifications</h6>
            <div className="d-flex gap-3">
              <div className="d-flex    align-items-startgap-3">
                <img
                  src={routard}
                  alt="Routard Certification"
                  style={{
                    height: "100px",
                    width: "fitContent",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>
              <div className="d-flex flex-column  align-items-start gap-3">
                <img
                  src={petit}
                  alt="Petit Futé Certification"
                  style={{
                    height: "100px",
                    width: "fitContent",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-top mt-5 pt-4 text-center">
          <p className="text-muted mb-0 small">
            &copy; {new Date().getFullYear()} Exotic Treks & Expeditions.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
