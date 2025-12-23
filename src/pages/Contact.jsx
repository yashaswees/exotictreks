import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Contact from "../components/Contact";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="container my-5">
       <Contact/>

        {/* Google Map */}
        <div
          className="info-card"
          style={{
            width: "100%",
            height: "350px",
            overflow: "hidden",
            borderRadius: "8px",
            marginTop: "1rem",
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

export default ContactPage;
