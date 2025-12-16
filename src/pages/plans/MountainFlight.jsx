"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

const MountainFlight = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="fw-bold mb-4"> {t("navbar.mountainFlight")} </h1>
        <p className="text-muted">Content coming soon...</p>
      </div>
      <Footer />
    </>
  );
};

export default MountainFlight;