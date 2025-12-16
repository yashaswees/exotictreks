"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaWater } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Rafting = () => {
  const { t } = useTranslation();

  const riverTrips = [
    {
      name: t("raftingPage.riverTrips.bhoteKoshi.name"),
      duration: t("raftingPage.riverTrips.bhoteKoshi.duration"),
      grade: t("raftingPage.riverTrips.bhoteKoshi.grade"),
      description: t("raftingPage.riverTrips.bhoteKoshi.description"),
      highlights: Array.isArray(t("raftingPage.riverTrips.bhoteKoshi.highlights", { returnObjects: true }))
        ? t("raftingPage.riverTrips.bhoteKoshi.highlights", { returnObjects: true })
        : []
    },
    {
      name: t("raftingPage.riverTrips.kaliGandaki.name"),
      duration: t("raftingPage.riverTrips.kaliGandaki.duration"),
      grade: t("raftingPage.riverTrips.kaliGandaki.grade"),
      description: t("raftingPage.riverTrips.kaliGandaki.description"),
      highlights: Array.isArray(t("raftingPage.riverTrips.kaliGandaki.highlights", { returnObjects: true }))
        ? t("raftingPage.riverTrips.kaliGandaki.highlights", { returnObjects: true })
        : []
    },
    {
      name: t("raftingPage.riverTrips.marshyangdi.name"),
      duration: t("raftingPage.riverTrips.marshyangdi.duration"),
      grade: t("raftingPage.riverTrips.marshyangdi.grade"),
      description: t("raftingPage.riverTrips.marshyangdi.description"),
      highlights: Array.isArray(t("raftingPage.riverTrips.marshyangdi.highlights", { returnObjects: true }))
        ? t("raftingPage.riverTrips.marshyangdi.highlights", { returnObjects: true })
        : []
    },
    {
      name: t("raftingPage.riverTrips.seti.name"),
      duration: t("raftingPage.riverTrips.seti.duration"),
      grade: t("raftingPage.riverTrips.seti.grade"),
      description: t("raftingPage.riverTrips.seti.description"),
      highlights: Array.isArray(t("raftingPage.riverTrips.seti.highlights", { returnObjects: true }))
        ? t("raftingPage.riverTrips.seti.highlights", { returnObjects: true })
        : []
    },
    {
      name: t("raftingPage.riverTrips.sunKoshi.name"),
      duration: t("raftingPage.riverTrips.sunKoshi.duration"),
      grade: t("raftingPage.riverTrips.sunKoshi.grade"),
      description: t("raftingPage.riverTrips.sunKoshi.description"),
      highlights: Array.isArray(t("raftingPage.riverTrips.sunKoshi.highlights", { returnObjects: true }))
        ? t("raftingPage.riverTrips.sunKoshi.highlights", { returnObjects: true })
        : []
    },
    {
      name: t("raftingPage.riverTrips.trishuli.name"),
      duration: t("raftingPage.riverTrips.trishuli.duration"),
      grade: t("raftingPage.riverTrips.trishuli.grade"),
      description: t("raftingPage.riverTrips.trishuli.description"),
      highlights: Array.isArray(t("raftingPage.riverTrips.trishuli.highlights", { returnObjects: true }))
        ? t("raftingPage.riverTrips.trishuli.highlights", { returnObjects: true })
        : []
    }
  ];
  const included = Array.isArray(
    t("raftingPage.inclusions.included", { returnObjects: true })
  )
    ? t("raftingPage.inclusions.included", { returnObjects: true })
    : [];

  const excluded = Array.isArray(
    t("raftingPage.inclusions.excluded", { returnObjects: true })
  )
    ? t("raftingPage.inclusions.excluded", { returnObjects: true })
    : [];

  const clothingItems = Array.isArray(
    t("raftingPage.whatToBring.clothing.items", { returnObjects: true })
  )
    ? t("raftingPage.whatToBring.clothing.items", { returnObjects: true })
    : [];

  const waterproofItems = Array.isArray(
    t("raftingPage.whatToBring.waterproof.items", { returnObjects: true })
  )
    ? t("raftingPage.whatToBring.waterproof.items", { returnObjects: true })
    : [];

  const personalItems = Array.isArray(
    t("raftingPage.whatToBring.personal.items", { returnObjects: true })
  )
    ? t("raftingPage.whatToBring.personal.items", { returnObjects: true })
    : [];



  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Hero Banner */}
        <div className="row mb-4">
          <div className="col-12 position-relative">
            <div
              className="ratio ratio-21x9 mb-3 rounded shadow-sm"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=1200')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold"> {t("raftingPage.activityInfo.name")}</h1>
              <p className="lead">
                {t("raftingPage.subHeroText")}
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
              }}
            >
              <div className="card-body">
                <h2 className="card-title fw-bold">{t("raftingPage.aboutText")}</h2>
                <p className="card-text">
                  {t("raftingPage.aboutRafting.p1")}
                </p>
                <p className="card-text">
                  {t("raftingPage.aboutRafting.p2")}

                </p>
                <p className="card-text">
                  {t("raftingPage.aboutRafting.p3")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card shadow-sm h-100 border-0"
              style={{ background: "#f8f9fa" }}
            >
              <div className="card-body">
                <h3 className="card-title fw-bold mb-4">{t("raftingPage.quickFacts.title")}</h3>

                <div
                  className="quick-fact-item d-flex align-items-center mb-3 p-2 rounded"
                  style={{ background: "rgba(13, 110, 253, 0.05)" }}
                >
                  <div
                    className="quick-fact-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <FaWater
                      className="text-primary"
                      style={{ fontSize: "1.2rem" }}
                    />
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small"> {t("raftingPage.quickFacts.grades")}</div>
                    <div className="fw-medium">{t("raftingPage.activityInfo.difficulty")}</div>
                  </div>
                </div>

                <div
                  className="quick-fact-item d-flex align-items-center mb-3 p-2 rounded"
                  style={{ background: "rgba(13, 110, 253, 0.05)" }}
                >
                  <div
                    className="quick-fact-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i
                      className="bi bi-calendar-week text-primary"
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">{t("raftingPage.quickFacts.season")}</div>
                    <div className="fw-medium">{t("raftingPage.activityInfo.bestSeason")}</div>
                  </div>
                </div>

                <div
                  className="quick-fact-item d-flex align-items-center p-2 rounded"
                  style={{ background: "rgba(13, 110, 253, 0.05)" }}
                >
                  <div
                    className="quick-fact-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i
                      className="bi bi-people text-primary"
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">{t("raftingPage.quickFacts.group")}</div>
                    <div className="fw-medium">{t("raftingPage.activityInfo.groupSize")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Info */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0"
              style={{ borderLeft: "4px solid #0d6efd" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-check text-primary fs-4 me-2"></i>
                  <h3 className="card-title fw-bold mb-0">
                    {t("raftingPage.safetyInfo.title")}
                  </h3>
                </div>
                <p className="card-text">{t("raftingPage.safetyInfo.description")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* River Trips */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <div className="card-header bg-primary bg-opacity-10 py-3 border-0">
                <div className="d-flex align-items-center">
                  <FaWater
                    className="text-primary me-2"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <h2 className="card-title fw-bold mb-0">
                    Available River Trips
                  </h2>
                </div>
              </div>
              <div className="card-body">
                <Accordion defaultActiveKey="0" className="river-accordion">
                  {riverTrips.map((trip, index) => (
                    <Accordion.Item
                      key={index}
                      eventKey={index.toString()}
                      className="border-0 mb-2"
                    >
                      <Accordion.Header>
                        <div className="d-flex align-items-center justify-content-between w-100 me-3">
                          <div className="d-flex align-items-center">
                            <div
                              className="me-3 bg-primary bg-opacity-10 rounded-circle text-primary fw-bold d-flex align-items-center justify-content-center"
                              style={{
                                width: "40px",
                                height: "40px",
                                fontSize: "14px",
                              }}
                            >
                              <FaWater />
                            </div>
                            <span className="fw-medium">{trip.name}</span>
                          </div>
                          <div className="d-flex gap-2">
                            <span className="badge bg-primary">
                              {trip.duration}
                            </span>
                            <span className="badge bg-secondary">
                              {trip.grade}
                            </span>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0 pb-3">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="mb-3 text-muted">{trip.description}</p>
                          </div>
                          <div className="col-md-4">
                            <div className="bg-light p-3 rounded">
                              <h6 className="fw-bold mb-2">
                                <i className="bi bi-star-fill text-warning me-2"></i>
                                Highlights
                              </h6>
                              <ul className="list-unstyled mb-0">
                                {trip.highlights.map((highlight, idx) => (
                                  <li key={idx} className="mb-1 small">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Included and Excluded */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div
              className="card shadow-sm h-100 border-0"
              style={{ background: "#f8f9fa" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 px-2 py-1 me-2">
                    <i className="bi bi-check-circle text-primary"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-0">  {t("raftingPage.inclusions.includedTitle")}</h3>
                </div>
                <ul className="list-group list-group-flush">
                  {included.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item border-0 bg-transparent"
                    >
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 px-2 py-1 me-2">
                    <i className="bi bi-x-circle text-primary"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-0">{t("raftingPage.inclusions.excludedTitle")}</h3>
                </div>
                <ul className="list-group list-group-flush">
                  {excluded.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item border-0 bg-transparent"
                    >
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What to Bring */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0"
              style={{
                background: "linear-gradient(to right, #ffffff, #f8f9fa)",
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 px-2 py-1 me-2">
                    <i className="bi bi-backpack text-primary"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-0">  {t("raftingPage.whatToBring.title")}</h3>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="packing-category p-3 rounded mb-3"
                      style={{ background: "rgba(13, 110, 253, 0.05)" }}
                    >
                      <h5 className="fw-medium d-flex align-items-center">
                        <i className="bi bi-layers me-2 text-primary"></i>
                        {t("raftingPage.whatToBring.clothing.title")}
                      </h5>
                      <ul className="list-group list-group-flush">
                        {clothingItems.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item border-0 py-1 bg-transparent"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="packing-category p-3 rounded mb-3"
                      style={{ background: "rgba(13, 110, 253, 0.05)" }}
                    >
                      <h5 className="fw-medium d-flex align-items-center">
                        <i className="bi bi-droplet me-2 text-primary"></i>
                        {t("raftingPage.whatToBring.waterproof.title")}
                      </h5>
                      <ul className="list-group list-group-flush">
                        {waterproofItems.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item border-0 py-1 bg-transparent"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="packing-category p-3 rounded mb-3"
                      style={{ background: "rgba(13, 110, 253, 0.05)" }}
                    >
                      <h5 className="fw-medium d-flex align-items-center">
                        <i className="bi bi-bandaid me-2 text-primary"></i>
                        {t("raftingPage.whatToBring.personal.title")}
                      </h5>
                      <ul className="list-group list-group-flush">
                        {personalItems.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item border-0 py-1 bg-transparent"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS */}
        <style jsx>{`
          .river-accordion .accordion-button {
            padding: 0.75rem 1.25rem;
            box-shadow: none;
            background-color: #f8f9fa;
            border-radius: 0.25rem !important;
          }

          .river-accordion .accordion-button:not(.collapsed) {
            color: #0d6efd;
            background-color: #f0f7ff;
            box-shadow: none;
          }

          .river-accordion .accordion-button:focus {
            box-shadow: none;
            border-color: rgba(13, 110, 253, 0.25);
          }

          .quick-fact-item:hover {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default Rafting;
