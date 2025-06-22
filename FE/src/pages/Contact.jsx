import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="info-card">
          <div className="card-content">
            <h2 className="card-title">Contact Us</h2>
            <div className="title-underline"></div>
            <div className="d-flex gap-5">
              <div className="w-50">
                <p className="card-text">
                  With over 20 years of experience, Exotique Nepal specializes
                  in creating unforgettable journeys across Nepal, India, and
                  Tibet. From breathtaking treks to rich cultural experiences,
                  we craft travel moments that stay with you for a lifetime.
                </p>
                <div className="d-flex gap-5">
                  <div className="experience-badge w-50">
                    <span className="years">20+</span>
                    <span className="label">Years of Experience</span>
                  </div>
                  <div className="experience-badge w-50">
                    <span className="years">1000+</span>
                    <span className="label">Satisfied Customers </span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column w-50 ">
                <ul className="contact-list">
                  <li className="contact-item">
                    <IoMail className="email-icon contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <a
                        href="mailto:info@exotiquenepal.fr"
                        className="contact-value"
                      >
                        info@exotiquenepal.fr
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <IoLogoWhatsapp className="contact-icon whatsapp-icon" />
                    <div className="contact-details">
                      <span className="contact-label">WhatsApp</span>
                      <a
                        href="https://wa.me/9779841554895"
                        className="contact-value"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Send Message
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <MdPhone className="contact-icon phone-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <a href="tel:+977-9841554895" className="contact-value">
                        +977-9841554895
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <MdLocationOn className="contact-icon address-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Address</span>
                      <span className="grey-text">
                        <a
                          href="https://maps.app.goo.gl/GsMc7krxVEDPLgeN8"
                          target="_blank"
                        >
                          Thamel, Kathmandu, Nepal
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
            className="info-card"
            style={{
              width: "100%",
              height: "350px",
              overflow: "hidden",
              borderRadius: "8px",
              marginTop:"1rem"
            }}
          >
            <iframe
              title="Exotic Treks Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1554601596904!2d85.30876897628347!3d27.712485976179618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdb5e37245%3A0x7f4c5451f6cecf89!2sExotic%20Treks%20%26%20Expeditions!5e0!3m2!1sen!2snp!4v1750322125915!5m2!1sen!2snp"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
