import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Exotic Treks</h3>
            <p className="footer-description">
              Creating unforgettable travel experiences across Nepal, India, and
              Tibet since 2005.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/exotiquenepal"
                aria-label="Facebook"
              >
                <CiFacebook className="social-icon" />
              </a>
              <a href="mailto:exotictreks@gmail.com" aria-label="Twitter">
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
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/blog"> Blogs</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Popular Destinations</h4>
            <ul className="footer-links">
              <li>
                <a href="/destinations/kathmandu">Kathmandu</a>
              </li>
              <li>
                <a href="/destinations/pokhara">Pokhara</a>
              </li>
              <li>
                <a href="/destinations/everest">Everest Base Camp</a>
              </li>
              <li>
                <a href="/destinations/annapurna">Annapurna Circuit</a>
              </li>
              <li>
                <a href="/destinations/chitwan">Chitwan National Park</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <address className="footer-contact">
              <p>
                <FaMapMarkerAlt className="footer-icon" />
                <a
                  href="https://maps.app.goo.gl/GsMc7krxVEDPLgeN8"
                  target="_blank"
                >
                  Thamel, Kathmandu, Nepal
                </a>
              </p>
              <p>
                <MdPhone className="footer-icon" />
                <a href="tel:+97711234567">+977-9841554895</a>
              </p>
              <p>
                <IoMail className="footer-icon" />
                <a href="mailto:exotictreks@gmail.com">exotictreks@gmail.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Exotic Treks and Expeditions. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
