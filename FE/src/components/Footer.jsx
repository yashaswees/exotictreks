import React from "react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t("footer.companyName")}</h3>
            <p className="footer-description">{t("footer.description")}</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/exotiquenepal"
                aria-label="Facebook"
              >
                <CiFacebook className="social-icon" />
              </a>
              <a href="mailto:exotictreks@gmail.com" aria-label="Email">
                <MdAlternateEmail className="social-icon" />
              </a>
              <a
                href="https://wa.me/9779841554895"
                className="contact-value"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">{t("footer.quickLinks")}</h4>
            <ul className="footer-links">
              <li>
                <a href="/">{t("footer.home")}</a>
              </li>
              <li>
                <a href="/about-us">{t("footer.about")}</a>
              </li>
              <li>
                <a href="/blogs">{t("footer.blogs")}</a>
              </li>
              <li>
                <a href="/contact-us">{t("footer.contact")}</a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-section">
            <h4 className="footer-subtitle">{t("footer.destinations")}</h4>
            <ul className="footer-links">
              <li>
                <a href="/destinations/kathmandu">{t("footer.kathmandu")}</a>
              </li>
              <li>
                <a >{t("footer.pokhara")}</a>
              </li>
              <li>
                <a href="/destinations/everest">{t("footer.everest")}</a>
              </li>
              <li>
                <a href="/destinations/annapurna">{t("footer.annapurna")}</a>
              </li>
              <li>
                <a href="/destinations/chitwan">{t("footer.chitwan")}</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">{t("footer.contactTitle")}</h4>
            <address className="footer-contact">
              <p>
                <FaMapMarkerAlt className="footer-icon" />
                <a
                  href="https://maps.app.goo.gl/GsMc7krxVEDPLgeN8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.location")}
                </a>
              </p>
              <p>
                <MdPhone className="footer-icon" />
                <a href="tel:+9779841554895">{t("footer.phone")}</a>
              </p>
              <p>
                <IoMail className="footer-icon" />
                <a href="mailto:exotictreks@gmail.com">
                  {t("footer.email")}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Exotic Treks and Expeditions.{" "}
            {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
