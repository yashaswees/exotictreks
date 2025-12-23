"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../assets/annapurna1.jpg";
import img2 from "../../assets/annapurna2.jpg";
import Navbar from "../../components/Navbar";
import { CiMountain1 } from "react-icons/ci";
import Footer from "../../components/Footer";
import { TbShoe } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const AnnapurnaBaseCampTrek = () => {
  const { t } = useTranslation();
  
  const trekInfo = {
    name: t("annapurnaBaseCamp.hero.name"),
    duration: t("annapurnaBaseCamp.quickFacts.duration"),
    difficulty: t("annapurnaBaseCamp.difficulty.moderateChallenging"),
    maxAltitude: t("annapurnaBaseCamp.quickFacts.maxAltitude"),
    bestSeason: t("annapurnaBaseCamp.quickFacts.bestSeason"),
    permits: t("annapurnaBaseCamp.permits.permitsList", { returnObjects: true }),
    highlights: t("annapurnaBaseCamp.highlights.highlightsList", { returnObjects: true })
  };

  const itinerary = [
    {
      day: 1,
      title: t("annapurnaBaseCamp.itinerary.day1.title"),
      description: t("annapurnaBaseCamp.itinerary.day1.description"),
      distance: "N/A",
      duration: "N/A",
    },
    {
      day: 2,
      title: t("annapurnaBaseCamp.itinerary.day2.title"),
      description: t("annapurnaBaseCamp.itinerary.day2.description"),
      distance: "200 km",
      duration: t("annapurnaBaseCamp.itinerary.day2.duration"),
    },
    {
      day: 3,
      title: t("annapurnaBaseCamp.itinerary.day3.title"),
      description: t("annapurnaBaseCamp.itinerary.day3.description"),
      distance: "10 km",
      duration: t("annapurnaBaseCamp.itinerary.day3.duration"),
    },
    {
      day: 4,
      title: t("annapurnaBaseCamp.itinerary.day4.title"),
      description: t("annapurnaBaseCamp.itinerary.day4.description"),
      distance: "12 km",
      duration: t("annapurnaBaseCamp.itinerary.day4.duration"),
    },
    {
      day: 5,
      title: t("annapurnaBaseCamp.itinerary.day5.title"),
      description: t("annapurnaBaseCamp.itinerary.day5.description"),
      distance: "9 km",
      duration: t("annapurnaBaseCamp.itinerary.day5.duration"),
    },
    {
      day: 6,
      title: t("annapurnaBaseCamp.itinerary.day6.title"),
      description: t("annapurnaBaseCamp.itinerary.day6.description"),
      distance: "10 km",
      duration: t("annapurnaBaseCamp.itinerary.day6.duration"),
    },
    {
      day: 7,
      title: t("annapurnaBaseCamp.itinerary.day7.title"),
      description: t("annapurnaBaseCamp.itinerary.day7.description"),
      distance: "7 km",
      duration: t("annapurnaBaseCamp.itinerary.day7.duration"),
    },
    {
      day: 8,
      title: t("annapurnaBaseCamp.itinerary.day8.title"),
      description: t("annapurnaBaseCamp.itinerary.day8.description"),
      distance: "11 km",
      duration: t("annapurnaBaseCamp.itinerary.day8.duration"),
    },
    {
      day: 9,
      title: t("annapurnaBaseCamp.itinerary.day9.title"),
      description: t("annapurnaBaseCamp.itinerary.day9.description"),
      distance: "7 km",
      duration: t("annapurnaBaseCamp.itinerary.day9.duration"),
    },
    {
      day: 10,
      title: t("annapurnaBaseCamp.itinerary.day10.title"),
      description: t("annapurnaBaseCamp.itinerary.day10.description"),
      distance: "14 km",
      duration: t("annapurnaBaseCamp.itinerary.day10.duration"),
    },
    {
      day: 11,
      title: t("annapurnaBaseCamp.itinerary.day11.title"),
      description: t("annapurnaBaseCamp.itinerary.day11.description"),
      distance: "12 km",
      duration: t("annapurnaBaseCamp.itinerary.day11.duration"),
    },
    {
      day: 12,
      title: t("annapurnaBaseCamp.itinerary.day12.title"),
      description: t("annapurnaBaseCamp.itinerary.day12.description"),
      distance: "9 km",
      duration: t("annapurnaBaseCamp.itinerary.day12.duration"),
    },
    {
      day: 13,
      title: t("annapurnaBaseCamp.itinerary.day13.title"),
      description: t("annapurnaBaseCamp.itinerary.day13.description"),
      distance: "200 km",
      duration: t("annapurnaBaseCamp.itinerary.day13.duration"),
    },
    {
      day: 14,
      title: t("annapurnaBaseCamp.itinerary.day14.title"),
      description: t("annapurnaBaseCamp.itinerary.day14.description"),
      distance: "N/A",
      duration: "N/A",
    },
  ];

  const packingItems = {
    clothing: t("annapurnaBaseCamp.packing.clothing.items", { returnObjects: true }),
    footwear: t("annapurnaBaseCamp.packing.footwear.items", { returnObjects: true }),
    personal: t("annapurnaBaseCamp.packing.personal.items", { returnObjects: true })
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
                alt={t("annapurnaBaseCamp.hero.name")}
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{trekInfo.name}</h1>
              <p className="lead">
                {t("annapurnaBaseCamp.hero.tagline")}
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
                  {t("annapurnaBaseCamp.overview.title")}
                </h2>
                <p className="card-text">
                  {t("annapurnaBaseCamp.overview.p1")}
                </p>
                <p className="card-text">
                  {t("annapurnaBaseCamp.overview.p2")}
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
                  {t("annapurnaBaseCamp.quickFacts.title")}
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
                      {t("annapurnaBaseCamp.quickFacts.durationLabel")}
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
                      {t("annapurnaBaseCamp.quickFacts.maxAltitudeLabel")}
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
                      {t("annapurnaBaseCamp.quickFacts.difficultyLabel")}
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
                      {t("annapurnaBaseCamp.difficulty.title")}
                    </h3>
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="me-3 mb-0">
                        <span className="badge bg-light text-primary border border-primary">
                          {trekInfo.difficulty}
                        </span>
                      </h4>
                    </div>
                    <p className="card-text">
                      {t("annapurnaBaseCamp.difficulty.description")}
                    </p>
                    <ul>
                      {t("annapurnaBaseCamp.difficulty.points", { returnObjects: true }).map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="card-text">
                      {t("annapurnaBaseCamp.difficulty.note")}
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div className="ratio ratio-4x3 mt-3 mt-md-0">
                      <img
                        src={img1}
                        className="img-fluid rounded shadow-sm object-fit-cover"
                        alt={t("annapurnaBaseCamp.imageAlt")}
                      />
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      {t("annapurnaBaseCamp.imageAlt")}
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
                    {t("annapurnaBaseCamp.permits.title")}
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
                  {t("annapurnaBaseCamp.permits.note")}
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
                    {t("annapurnaBaseCamp.highlights.title")}
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
                    {t("annapurnaBaseCamp.itinerary.title")}
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
                                  {t("annapurnaBaseCamp.itinerary.distance")}:
                                </span>{" "}
                                {day.distance}
                              </div>
                              <div>
                                <i className="bi bi-clock me-1 text-primary"></i>
                                <span className="fw-medium">
                                  {t("annapurnaBaseCamp.itinerary.duration")}:
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
                    {t("annapurnaBaseCamp.packing.title")}
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
                            {t("annapurnaBaseCamp.packing.clothing.title")}
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
                            {t("annapurnaBaseCamp.packing.footwear.title")}
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
                            {t("annapurnaBaseCamp.packing.personal.title")}
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

export default AnnapurnaBaseCampTrek;