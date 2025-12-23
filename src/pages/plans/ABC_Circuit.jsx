"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../assets/Muktinath-Temple.png";
import img2 from "../../assets/annapurna_circuit.jpg";
import Navbar from "../../components/Navbar";
import { CiMountain1 } from "react-icons/ci";
import Footer from "../../components/Footer";
import { TbShoe } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const AnnapurnaCircuitJomsomTrek = () => {
  const { t } = useTranslation();
  
  const trekInfo = {
    name: t("annapurnaCircuitJomsom.hero.name"),
    duration: "14 days",
    difficulty: t("annapurnaCircuitJomsom.difficulty.moderateChallenging"),
    maxAltitude: "3,800 meters (12,467 feet)",
    bestSeason: "March-May & September-November",
    permits: [
      t("annapurnaCircuitJomsom.permits.permitsList.0"),
      t("annapurnaCircuitJomsom.permits.permitsList.1"),
    ],
    highlights: [
      t("annapurnaCircuitJomsom.highlights.highlightsList.0"),
      t("annapurnaCircuitJomsom.highlights.highlightsList.1"),
      t("annapurnaCircuitJomsom.highlights.highlightsList.2"),
      t("annapurnaCircuitJomsom.highlights.highlightsList.3"),
      t("annapurnaCircuitJomsom.highlights.highlightsList.4"),
      t("annapurnaCircuitJomsom.highlights.highlightsList.5"),
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: t("annapurnaCircuitJomsom.itinerary.day1.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day1.description"),
      distance: "N/A",
      duration: "N/A",
    },
    {
      day: 2,
      title: t("annapurnaCircuitJomsom.itinerary.day2.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day2.description"),
      distance: "200 km",
      duration: "6-7 hours drive",
    },
    {
      day: 3,
      title: t("annapurnaCircuitJomsom.itinerary.day3.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day3.description"),
      distance: "11 km",
      duration: "20 min flight, 3-4 hours trek",
    },
    {
      day: 4,
      title: t("annapurnaCircuitJomsom.itinerary.day4.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day4.description"),
      distance: "9 km",
      duration: "5-6 hours",
    },
    {
      day: 5,
      title: t("annapurnaCircuitJomsom.itinerary.day5.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day5.description"),
      distance: "N/A",
      duration: "Rest day",
    },
    {
      day: 6,
      title: t("annapurnaCircuitJomsom.itinerary.day6.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day6.description"),
      distance: "20 km",
      duration: "5-6 hours",
    },
    {
      day: 7,
      title: t("annapurnaCircuitJomsom.itinerary.day7.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day7.description"),
      distance: "14 km",
      duration: "5-6 hours",
    },
    {
      day: 8,
      title: t("annapurnaCircuitJomsom.itinerary.day8.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day8.description"),
      distance: "22 km",
      duration: "6-7 hours",
    },
    {
      day: 9,
      title: t("annapurnaCircuitJomsom.itinerary.day9.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day9.description"),
      distance: "14 km",
      duration: "7-8 hours",
    },
    {
      day: 10,
      title: t("annapurnaCircuitJomsom.itinerary.day10.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day10.description"),
      distance: "4 km",
      duration: "2-3 hours round trip",
    },
    {
      day: 11,
      title: t("annapurnaCircuitJomsom.itinerary.day11.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day11.description"),
      distance: "16 km",
      duration: "5-6 hours trek, 1.5 hours drive",
    },
    {
      day: 12,
      title: t("annapurnaCircuitJomsom.itinerary.day12.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day12.description"),
      distance: "200 km",
      duration: "6-7 hours drive",
    },
    {
      day: 13,
      title: t("annapurnaCircuitJomsom.itinerary.day13.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day13.description"),
      distance: "N/A",
      duration: "N/A",
    },
    {
      day: 14,
      title: t("annapurnaCircuitJomsom.itinerary.day14.title"),
      description: t("annapurnaCircuitJomsom.itinerary.day14.description"),
      distance: "N/A",
      duration: "N/A",
    },
  ];

  const packingItems = {
    clothing: [
      t("annapurnaCircuitJomsom.packing.clothing.items.0"),
      t("annapurnaCircuitJomsom.packing.clothing.items.1"),
      t("annapurnaCircuitJomsom.packing.clothing.items.2"),
      t("annapurnaCircuitJomsom.packing.clothing.items.3"),
      t("annapurnaCircuitJomsom.packing.clothing.items.4"),
      t("annapurnaCircuitJomsom.packing.clothing.items.5"),
      t("annapurnaCircuitJomsom.packing.clothing.items.6"),
      t("annapurnaCircuitJomsom.packing.clothing.items.7"),
    ],
    footwear: [
      t("annapurnaCircuitJomsom.packing.footwear.items.0"),
      t("annapurnaCircuitJomsom.packing.footwear.items.1"),
      t("annapurnaCircuitJomsom.packing.footwear.items.2"),
      t("annapurnaCircuitJomsom.packing.footwear.items.3"),
      t("annapurnaCircuitJomsom.packing.footwear.items.4"),
      t("annapurnaCircuitJomsom.packing.footwear.items.5"),
      t("annapurnaCircuitJomsom.packing.footwear.items.6"),
      t("annapurnaCircuitJomsom.packing.footwear.items.7"),
    ],
    personal: [
      t("annapurnaCircuitJomsom.packing.personal.items.0"),
      t("annapurnaCircuitJomsom.packing.personal.items.1"),
      t("annapurnaCircuitJomsom.packing.personal.items.2"),
      t("annapurnaCircuitJomsom.packing.personal.items.3"),
      t("annapurnaCircuitJomsom.packing.personal.items.4"),
      t("annapurnaCircuitJomsom.packing.personal.items.5"),
      t("annapurnaCircuitJomsom.packing.personal.items.6"),
      t("annapurnaCircuitJomsom.packing.personal.items.7"),
    ],
  };

  // State to track the active accordion item
  const [activeKey, setActiveKey] = useState("0");

  return (
    <>
      <Navbar />
      <div className="container my-5 ">
        {/* Hero Banner Image */}
        <div className="row mb-4">
          <div className="col-12 position-relative">
            <div className="ratio ratio-21x9 mb-3">
              <img
                src={img2}
                className="img-fluid rounded shadow-sm object-fit-cover"
                alt={t("annapurnaCircuitJomsom.hero.name")}
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{trekInfo.name}</h1>
              <p className="lead">
                {t("annapurnaCircuitJomsom.hero.tagline")}
              </p>
            </div>
          </div>
        </div>

        {/* Trek Overview */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
              }}
            >
              <div className="card-body">
                <h2 className="card-title fw-bold">
                  {t("annapurnaCircuitJomsom.overview.title")}
                </h2>
                <p className="card-text">
                  {t("annapurnaCircuitJomsom.overview.p1")}
                </p>
                <p className="card-text">
                  {t("annapurnaCircuitJomsom.overview.p2")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/* Enhanced Quick Facts with Icons */}
            <div
              className="card shadow-sm h-100 border-0"
              style={{ background: "#f8f9fa" }}
            >
              <div className="card-body">
                <h3 className="card-title fw-bold mb-4">
                  {t("annapurnaCircuitJomsom.quickFacts.title")}
                </h3>

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
                    <div className="text-muted small">
                      {t("annapurnaCircuitJomsom.quickFacts.duration")}
                    </div>
                    <div className="fw-medium">{trekInfo.duration}</div>
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
                    <CiMountain1
                      className="text-primary"
                      style={{ fontSize: "1.2rem" }}
                    />
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">
                      {t("annapurnaCircuitJomsom.quickFacts.maxAltitude")}
                    </div>
                    <div className="fw-medium">{trekInfo.maxAltitude}</div>
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
                      className="bi bi-bar-chart text-primary"
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">
                      {t("annapurnaCircuitJomsom.quickFacts.difficulty")}
                    </div>
                    <div className="fw-medium">{trekInfo.difficulty}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0"
              style={{ borderLeft: "4px solid #0d6efd" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="card-title fw-bold">
                      {t("annapurnaCircuitJomsom.difficulty.title")}
                    </h3>
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="me-3 mb-0">
                        <span className="badge bg-light text-primary border border-primary">
                          {trekInfo.difficulty}
                        </span>
                      </h4>
                    </div>
                    <p className="card-text">
                      {t("annapurnaCircuitJomsom.difficulty.description")}
                    </p>
                    <ul>
                      {t("annapurnaCircuitJomsom.difficulty.points", { returnObjects: true }).map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="card-text">
                      {t("annapurnaCircuitJomsom.difficulty.note")}
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div className="ratio ratio-4x3 mt-3 mt-md-0">
                      <img
                        src={img1}
                        className="img-fluid rounded shadow-sm object-fit-cover"
                        alt={t("annapurnaCircuitJomsom.muktinathImageAlt")}
                      />
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      {t("annapurnaCircuitJomsom.muktinathImageAlt")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Permits and Requirements */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div
              className="card shadow-sm h-100 border-0"
              style={{ background: "#f8f9fa" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 px-2 py-1 me-2">
                    <i className="bi bi-clipboard-check text-primary"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-0">
                    {t("annapurnaCircuitJomsom.permits.title")}
                  </h3>
                </div>
                <ul className="list-group list-group-flush">
                  {trekInfo.permits.map((permit, index) => (
                    <li
                      key={index}
                      className="list-group-item border-0 bg-transparent"
                    >
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {permit}
                    </li>
                  ))}
                </ul>
                <div className="alert alert-light border mt-3">
                  <i className="bi bi-info-circle-fill text-primary me-2"></i>
                  {t("annapurnaCircuitJomsom.permits.note")}
                </div>
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
                    <i className="bi bi-star text-primary"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-0">
                    {t("annapurnaCircuitJomsom.highlights.title")}
                  </h3>
                </div>
                <ul className="list-group list-group-flush">
                  {trekInfo.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="list-group-item border-0 bg-transparent"
                    >
                      <i className="bi bi-star-fill text-warning me-2"></i>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Itinerary - Accordion */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <div className="card-header bg-primary bg-opacity-10 py-3 border-0">
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-calendar-week text-primary me-2"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <h2 className="card-title fw-bold mb-0">
                    {t("annapurnaCircuitJomsom.itinerary.title")}
                  </h2>
                </div>
              </div>
              <div className="card-body">
                <Accordion defaultActiveKey="0" className="itinerary-accordion">
                  {itinerary.map((day, index) => (
                    <Accordion.Item
                      key={index}
                      eventKey={index.toString()}
                      className="border-0 mb-2"
                    >
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <div
                            className="me-3 bg-primary bg-opacity-10 rounded-circle text-primary fw-bold d-flex align-items-center justify-content-center"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "14px",
                            }}
                          >
                            {day.day}
                          </div>
                          <span className="fw-medium">{day.title}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0 pb-3">
                        <div className="row">
                          <div className="col-md-9">
                            <p className="mb-2 text-muted">{day.description}</p>
                          </div>
                          <div className="col-md-3">
                            <div className="bg-light p-2 rounded small">
                              <div className="mb-1">
                                <i className="bi bi-arrows-move me-1 text-primary"></i>
                                <span className="fw-medium">
                                  {t("annapurnaCircuitJomsom.itinerary.distance")}:
                                </span>{" "}
                                {day.distance}
                              </div>
                              <div>
                                <i className="bi bi-clock me-1 text-primary"></i>
                                <span className="fw-medium">
                                  {t("annapurnaCircuitJomsom.itinerary.duration")}:
                                </span>{" "}
                                {day.duration}
                              </div>
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

        {/* Packing and Preparation */}
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
                  <h3 className="card-title fw-bold mb-0">
                    {t("annapurnaCircuitJomsom.packing.title")}
                  </h3>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4">
                        <div
                          className="packing-category p-3 rounded mb-3"
                          style={{ background: "rgba(13, 110, 253, 0.05)" }}
                        >
                          <h5 className="fw-medium d-flex align-items-center">
                            <i className="bi bi-layers me-2 text-primary"></i>
                            {t("annapurnaCircuitJomsom.packing.clothing.title")}
                          </h5>
                          <ul className="list-group list-group-flush">
                            {packingItems.clothing.map((item, index) => (
                              <li key={index} className="list-group-item border-0 py-1 bg-transparent">
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
                            <TbShoe className=" me-2 text-primary"/>
                            {t("annapurnaCircuitJomsom.packing.footwear.title")}
                          </h5>
                          <ul className="list-group list-group-flush">
                            {packingItems.footwear.map((item, index) => (
                              <li key={index} className="list-group-item border-0 py-1 bg-transparent">
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
                            {t("annapurnaCircuitJomsom.packing.personal.title")}
                          </h5>
                          <ul className="list-group list-group-flush">
                            {packingItems.personal.map((item, index) => (
                              <li key={index} className="list-group-item border-0 py-1 bg-transparent">
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
          </div>
        </div>

        {/* Custom CSS for Accordion */}
        <style jsx>{`
          .itinerary-accordion .accordion-button {
            padding: 0.75rem 1.25rem;
            box-shadow: none;
            background-color: #f8f9fa;
            border-radius: 0.25rem !important;
          }

          .itinerary-accordion .accordion-button:not(.collapsed) {
            color: #0d6efd;
            background-color: #f0f7ff;
            box-shadow: none;
          }

          .itinerary-accordion .accordion-button:focus {
            box-shadow: none;
            border-color: rgba(13, 110, 253, 0.25);
          }

          .itinerary-accordion .accordion-button::after {
            width: 1rem;
            height: 1rem;
            background-size: 1rem;
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

export default AnnapurnaCircuitJomsomTrek;