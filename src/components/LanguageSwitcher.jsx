import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const isFrench = i18n.language === "fr";
  const flagSrc = isFrench
    ? "/images/flag_english.png"
    : "/images/flag_france.png";
  const label = isFrench ? "EN" : "FR";

  return (
    <button
      onClick={toggleLanguage}
      className="d-flex align-items-center gap-2 px-2 py-1 border-0 text-secondary hover-bg-light rounded-0"
      style={{
        fontSize: "0.9rem",
        backgroundColor: "#f0f0f0",
        color: "#000",
        borderRadius: "6px",
      }}
    >
      <img
        src={flagSrc}
        alt={label}
      
        style={{ objectFit: "cover", width: "22px", height:"18px" }}
      />
      <span>{label}</span>
    </button>
  );
};

export default LanguageSwitcher;
