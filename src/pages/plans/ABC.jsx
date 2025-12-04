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

const AnnapurnaBaseCampTrek = () => {
  const trekInfo = {
    name: "Annapurna Base Camp Trek",
    duration: "10-12 days",
    difficulty: "Moderate to Challenging",
    maxAltitude: "4,130 meters (13,550 feet) ",
    bestSeason: "March-May  & September-November",
    permits: [
      "ACAP (Annapurna Conservation Area Permit)",
      "TIMS Card (Trekkers' Information Management System)",
    ],
    highlights: [
      "Spectacular views of Annapurna I (8,091m), Machapuchare (6,993m), and other peaks",
      "Diverse landscapes from lush forests to alpine terrain",
      "Cultural experiences in traditional Gurung villages",
      "Natural hot springs at Jhinu Danda",
      "Sunrise view from Poon Hill (optional extension)",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrive in Kathmandu (1,400m)",
      description:
        "Arrive at Tribhuvan International Airport in Kathmandu. Transfer to your hotel and prepare for the trek. Briefing with your trek guide in the evening.",
      distance: "N/A",
      duration: "N/A",
    },
    {
      day: 2,
      title: "Drive from Kathmandu to Pokhara (827m)",
      description:
        "Take a scenic 6-7 hour drive or a 25-minute flight to Pokhara. Enjoy views of the Annapurna and Manaslu ranges. Overnight in Pokhara by the beautiful Phewa Lake.",
      distance: "200 km",
      duration: "6-7 hours drive",
    },
    {
      day: 3,
      title: "Drive to Nayapul and Trek to Tikhedhunga (1,540m)",
      description:
        "Drive to Nayapul (1.5 hours) and begin your trek. Walk through villages and farmland following the Modi Khola river valley. Overnight at Tikhedhunga.",
      distance: "10 km",
      duration: "4-5 hours",
    },
    {
      day: 4,
      title: "Trek from Tikhedhunga to Ghorepani (2,860m)",
      description:
        "Challenging day with a steep climb up stone steps to Ulleri village. Continue through rhododendron and oak forests to reach Ghorepani, offering stunning mountain views.",
      distance: "12 km",
      duration: "6-7 hours",
    },
    {
      day: 5,
      title: "Hike to Poon Hill (3,210m) and Trek to Tadapani (2,630m)",
      description:
        "Early morning hike to Poon Hill for sunrise views over the Himalayas. Return to Ghorepani for breakfast, then trek through beautiful forests to Tadapani.",
      distance: "9 km",
      duration: "5-6 hours",
    },
    {
      day: 6,
      title: "Trek from Tadapani to Chhomrong (2,170m)",
      description:
        "Descend through dense rhododendron forests to Kimrong Khola. Climb to Chhomrong, a beautiful Gurung village with excellent views of Annapurna South and Machapuchare.",
      distance: "10 km",
      duration: "5-6 hours",
    },
    {
      day: 7,
      title: "Trek from Chhomrong to Bamboo (2,310m)",
      description:
        "Descend on stone steps to cross the Chhomrong Khola, then climb to Sinuwa. Continue through dense bamboo and rhododendron forests to reach Bamboo.",
      distance: "7 km",
      duration: "4-5 hours",
    },
    {
      day: 8,
      title: "Trek from Bamboo to Deurali (3,230m)",
      description:
        "Trek through bamboo and rhododendron forests, passing Himalaya Hotel and Hinku Cave. The trail becomes steeper as you approach Deurali, with views of the Modi Khola valley.",
      distance: "11 km",
      duration: "6-7 hours",
    },
    {
      day: 9,
      title: "Trek from Deurali to Annapurna Base Camp (4,130m)",
      description:
        "Trek through alpine terrain to Machapuchare Base Camp (3,700m). Continue to Annapurna Base Camp, surrounded by the Annapurna massif. Spectacular 360° mountain views.",
      distance: "7 km",
      duration: "4-5 hours",
    },
    {
      day: 10,
      title: "Sunrise at ABC and Trek to Bamboo (2,310m)",
      description:
        "Early morning to enjoy sunrise over the Himalayas. After breakfast, begin descent to Bamboo, retracing your steps through MBC and Deurali.",
      distance: "14 km",
      duration: "7-8 hours",
    },
    {
      day: 11,
      title: "Trek from Bamboo to Jhinu Danda (1,780m)",
      description:
        "Continue descent through Sinuwa and Chhomrong. Descend to Jhinu Danda, where you can relax in natural hot springs near the Modi Khola river.",
      distance: "12 km",
      duration: "5-6 hours",
    },
    {
      day: 12,
      title: "Trek from Jhinu Danda to Nayapul, Drive to Pokhara",
      description:
        "Final day of trekking through villages to Nayapul. Drive back to Pokhara (1.5 hours) and celebrate the completion of your trek.",
      distance: "9 km",
      duration: "4-5 hours trekking, 1.5 hours drive",
    },
    {
      day: 13,
      title: "Drive/Fly from Pokhara to Kathmandu",
      description:
        "Return to Kathmandu by road or air. Free time for shopping or sightseeing in Kathmandu.",
      distance: "200 km",
      duration: "6-7 hours drive or 25 minutes flight",
    },
    {
      day: 14,
      title: "Departure from Kathmandu",
      description:
        "Transfer to Tribhuvan International Airport for your departure flight.",
      distance: "N/A",
      duration: "N/A",
    },
  ];

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
                alt="Annapurna Base Camp Trek"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{trekInfo.name}</h1>
              <p className="lead">
                Experience one of the most iconic treks in the Himalayas
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
                <h2 className="card-title fw-bold">Trek Overview</h2>
                <p className="card-text">
                  The Annapurna Base Camp trek is one of Nepal's most rewarding
                  journeys, taking you through diverse landscapes from lush
                  subtropical forests to high alpine meadows. The trek
                  culminates at the amphitheater-like Annapurna Base Camp,
                  surrounded by towering Himalayan peaks including Annapurna I
                  (8,091m) and the sacred Machapuchare (Fishtail Mountain).
                </p>
                <p className="card-text">
                  This trek offers a perfect blend of natural beauty and
                  cultural experiences as you pass through traditional Gurung
                  villages, terraced farmlands, and pristine forests. The
                  well-established tea house network makes it accessible to
                  trekkers with moderate fitness levels.
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
                <h3 className="card-title fw-bold mb-4">Quick Facts</h3>

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
                    <div className="text-muted small">Duration</div>
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
                    <div className="text-muted small">Max Altitude</div>
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
                    <div className="text-muted small">Difficulty</div>
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
                    <h3 className="card-title fw-bold">Trek Difficulty</h3>
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="me-3 mb-0">
                        <span className="badge bg-light text-primary border border-primary">
                          {trekInfo.difficulty}
                        </span>
                      </h4>
                    </div>
                    <p className="card-text">
                      The Annapurna Base Camp trek is rated as moderate to
                      challenging. While it doesn't involve technical climbing,
                      you'll need good physical fitness to handle:
                    </p>
                    <ul>
                      <li>Daily walking of 5-7 hours</li>
                      <li>
                        Steep ascents and descents, particularly the stone steps
                        to Ulleri
                      </li>
                      <li>Altitude gain (maximum 4,130m at ABC)</li>
                      <li>Varying weather conditions</li>
                    </ul>
                    <p className="card-text">
                      Prior trekking experience is helpful but not required.
                      Proper acclimatization is built into the itinerary to
                      minimize altitude sickness risk.
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div className="ratio ratio-4x3 mt-3 mt-md-0">
                      <img
                        src={img1}
                        className="img-fluid rounded shadow-sm object-fit-cover"
                        alt="Annapurna Base Camp"
                      />
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      Annapurna Base Camp at 4,130m
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
                  <h3 className="card-title fw-bold mb-0">Required Permits</h3>
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
                  Permits can be arranged through your trekking agency or
                  obtained in Kathmandu/Pokhara.
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
                  <h3 className="card-title fw-bold mb-0">Trek Highlights</h3>
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
                    Detailed Itinerary
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
                                <span className="fw-medium">Distance:</span>{" "}
                                {day.distance}
                              </div>
                              <div>
                                <i className="bi bi-clock me-1 text-primary"></i>
                                <span className="fw-medium">Duration:</span>{" "}
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
                    Essential Packing List
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
                            Clothing
                          </h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Moisture-wicking t-shirts
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Trekking pants (convertible recommended)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Insulating mid-layers (fleece/down)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Waterproof jacket and pants
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Thermal base layers
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Hiking socks (3-4 pairs)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Warm hat and gloves
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sun hat
                            </li>
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
                            Footwear & Gear
                          </h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Waterproof hiking boots (broken in)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Camp shoes/sandals
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Trekking poles
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Backpack (40-50L)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sleeping bag (-10°C comfort rating)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Headlamp with spare batteries
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Water bottles (2L capacity)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunglasses (UV protection)
                            </li>
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
                            Personal Items
                          </h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              First aid kit
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Prescription medications
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Altitude sickness medication
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunscreen and lip balm
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Hand sanitizer
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Toilet paper
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Quick-dry towel
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Camera with extra batteries
                            </li>
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
