"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaLandmark } from "react-icons/fa";

const VisitTibet = () => {
  const tourInfo = {
    name: "Visit Tibet - Roof of the World Adventure",
    duration: "8 days",
    difficulty: "Moderate",
    bestSeason: "Apr-Oct (Best: May-Jun & Sep-Oct)",
    groupSize: "2-12 pax",
    highlights: [
      "Potala Palace: The iconic winter palace of the Dalai Lamas",
      "Jokhang Temple: Tibet's most sacred Buddhist temple",
      "Barkhor Street: Ancient pilgrimage circuit and vibrant market",
      "Sera Monastery: Famous for monk debates and Buddhist art",
      "Drepung Monastery: Once the world's largest monastery",
      "Namtso Lake: One of the highest saltwater lakes in the world",
      "Yamdrok Lake: Sacred turquoise lake with stunning mountain views",
      "Traditional Tibetan Culture: Authentic experiences with local families",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrive in Lhasa (3,650m)",
      description:
        "Fly into Lhasa Gonggar Airport from Kathmandu or a Chinese gateway city. Upon arrival, you will be met by our Tibetan guide and transferred to your hotel in Lhasa. The drive from the airport to Lhasa city takes approximately 1 hour along the Yarlung Tsangpo River. Due to the high altitude, today is dedicated to acclimatization. Rest at your hotel, drink plenty of water, and avoid strenuous activity. Light walking around the hotel area is recommended to help your body adjust.",
      accommodation: "Hotel in Lhasa",
      duration: "Arrival & acclimatization",
    },
    {
      day: 2,
      title: "Lhasa - Potala Palace & Jokhang Temple",
      description:
        "After breakfast, begin your exploration of Lhasa with a visit to the magnificent Potala Palace, the iconic symbol of Tibet. This UNESCO World Heritage Site was the winter residence of the Dalai Lamas and contains over 1,000 rooms filled with sacred chapels, tombs of past Dalai Lamas, and priceless Buddhist artifacts. The climb up the palace requires moderate exertion at altitude, so take it slowly. In the afternoon, visit the Jokhang Temple, Tibet's most sacred Buddhist temple, built in the 7th century. Walk the Barkhor Street pilgrimage circuit surrounding the temple, joining pilgrims as they circumambulate this holy site while spinning prayer wheels.",
      accommodation: "Hotel in Lhasa",
      duration: "Full day sightseeing",
    },
    {
      day: 3,
      title: "Lhasa - Sera & Drepung Monasteries",
      description:
        "Today, visit two of Tibet's most important 'Great Three' Gelugpa monasteries. Begin at Drepung Monastery, once the world's largest monastery housing over 10,000 monks. Founded in 1416, it served as the residence of the Dalai Lamas before the Potala Palace was built. Explore the various colleges, prayer halls, and the beautiful Ganden Palace. After lunch, proceed to Sera Monastery, famous for its fascinating monk debates held in the courtyard each afternoon (except Sundays). Watch as monks engage in animated philosophical discussions, clapping hands and stamping feet to emphasize their points. This centuries-old tradition is a highlight of any Tibet visit.",
      accommodation: "Hotel in Lhasa",
      duration: "Full day sightseeing",
    },
    {
      day: 4,
      title: "Lhasa to Gyantse via Yamdrok Lake (4,441m)",
      description:
        "Depart Lhasa for a scenic drive to Gyantse. The journey takes you over the Kamba La Pass (4,794m), offering your first breathtaking view of Yamdrok Lake - one of Tibet's three sacred lakes. The lake's stunning turquoise waters, backed by snow-capped mountains, create an unforgettable panorama. Continue over the Karo La Pass (5,039m) with views of the Karo La Glacier. Stop at the traditional village of Nangartse for photos and to experience local life. Arrive in Gyantse, a town that has preserved much of its traditional Tibetan character. Visit the Gyantse Kumbum, a unique multi-storied stupa containing 77 chapels with beautiful murals.",
      accommodation: "Hotel in Gyantse",
      duration: "5-6 hour drive with stops",
    },
    {
      day: 5,
      title: "Gyantse to Shigatse - Pelkor Chode & Tashilhunpo",
      description:
        "Morning visit to the impressive Pelkor Chode Monastery, which uniquely houses Gelugpa, Sakyapa, and Buton monks under one roof. The nearby Gyantse Dzong (fortress) offers panoramic views over the town. After lunch, drive to Shigatse (approximately 1.5 hours), Tibet's second-largest city. Visit the magnificent Tashilhunpo Monastery, the traditional seat of the Panchen Lamas. Founded in 1447 by the first Dalai Lama, this sprawling complex contains numerous chapels, including one housing a 26-meter tall gilded statue of Maitreya Buddha - the largest gilded statue in China. Explore the monastery's various colleges and the tombs of past Panchen Lamas.",
      accommodation: "Hotel in Shigatse",
      duration: "1.5-hour drive + sightseeing",
    },
    {
      day: 6,
      title: "Shigatse to Lhasa",
      description:
        "After breakfast, drive back to Lhasa via the Friendship Highway. This scenic route follows the Yarlung Tsangpo River, offering beautiful valley views and glimpses of traditional Tibetan village life. En route, make a stop at Shalu Monastery, known for its beautiful 14th-century murals blending Tibetan and Mongolian artistic styles. The monastery was once a famous center for psychic training. Arrive in Lhasa by late afternoon. The evening is free for you to explore the city at your own pace, perhaps returning to the Barkhor area for shopping or enjoying a traditional Tibetan dinner.",
      accommodation: "Hotel in Lhasa",
      duration: "6-hour drive with stops",
    },
    {
      day: 7,
      title: "Lhasa - Namtso Lake Excursion (4,718m)",
      description:
        "Early departure for a day trip to Namtso Lake, one of the highest large lakes in the world and one of Tibet's three holy lakes. The drive takes approximately 4-5 hours each way, crossing the Nyenchen Tanglha mountain range via the Laken Pass (5,190m). Upon arrival at Namtso, you'll be rewarded with stunning views of the vast turquoise lake backed by snow-capped peaks. The Tashi Dor Peninsula offers excellent photo opportunities and short hikes. Tibetan nomads graze their yaks in the surrounding grasslands, and you may see their traditional black tents. Return to Lhasa by evening.",
      accommodation: "Hotel in Lhasa",
      duration: "Full day excursion (8-10 hours)",
    },
    {
      day: 8,
      title: "Departure from Lhasa",
      description:
        "Depending on your flight time, enjoy a leisurely breakfast or take a final morning walk around the Barkhor area. Transfer to Lhasa Gonggar Airport for your onward journey. Depart with unforgettable memories of Tibet's spiritual heritage, dramatic landscapes, and the warm hospitality of the Tibetan people. End of Service.",
      accommodation: "N/A",
      duration: "Airport transfer",
    },
  ];

  const included = [
    "Airport pickup and drop-off in private vehicle",
    "7 nights accommodation with breakfast",
    "All sightseeing tours as per itinerary with private vehicle",
    "Professional English-speaking Tibetan guide",
    "All applicable entrance fees for monasteries and sites",
    "Tibet Travel Permit and all necessary permits",
    "Bottled water during sightseeing",
    "Government taxes and service charges",
  ];

  const excluded = [
    "International/domestic airfare to/from Lhasa",
    "Chinese visa fee",
    "Lunch and dinner",
    "Personal expenses (laundry, telephone, beverages, etc.)",
    "Tips and gratuities for guides and drivers",
    "Travel insurance (mandatory for Tibet)",
    "Camera fees at monasteries",
    "Any expenses arising due to altitude sickness or unforeseen circumstances",
  ];

  const aboutTibet = {
    title: "About Tibet",
    description: `Tibet, known as the "Roof of the World," is a land of extraordinary spiritual heritage and breathtaking natural beauty. Perched on the highest plateau on Earth, with an average elevation of over 4,500 meters, Tibet offers landscapes unlike anywhere else - vast grasslands, turquoise lakes, snow-capped peaks, and ancient monasteries clinging to mountainsides.

For centuries, Tibet has been the heartland of Vajrayana Buddhism, and its monasteries, temples, and sacred sites draw pilgrims and spiritual seekers from around the globe. The influence of Buddhism permeates every aspect of Tibetan life - from the prayer flags fluttering on mountain passes to the monks debating philosophy in monastery courtyards.

Despite the challenges of its remote location and high altitude, visitors to Tibet are rewarded with profound cultural experiences and some of the most spectacular scenery on the planet. The warmth and devotion of the Tibetan people, their colorful traditions, and the otherworldly beauty of their homeland create a journey that touches the soul.`,
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
            <div
              className="ratio ratio-21x9 mb-3 rounded shadow-sm"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{tourInfo.name}</h1>
              <p className="lead">
                Discover the Spiritual Heart of the Himalayas
              </p>
            </div>
          </div>
        </div>

        {/* Tour Overview */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
              }}
            >
              <div className="card-body">
                <h2 className="card-title fw-bold">Tour Overview</h2>
                <p className="card-text">
                  {aboutTibet.description.split('\n\n')[0]}
                </p>
                <p className="card-text">
                  {aboutTibet.description.split('\n\n')[1]}
                </p>
                <p className="card-text">
                  {aboutTibet.description.split('\n\n')[2]}
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
                    <div className="fw-medium">{tourInfo.duration}</div>
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
                    <FaLandmark
                      className="text-primary"
                      style={{ fontSize: "1.2rem" }}
                    />
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">Best Season</div>
                    <div className="fw-medium">{tourInfo.bestSeason}</div>
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
                      className="bi bi-bar-chart text-primary"
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">Difficulty</div>
                    <div className="fw-medium">{tourInfo.difficulty}</div>
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
                    <div className="text-muted small">Group Size</div>
                    <div className="fw-medium">{tourInfo.groupSize}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Altitude Warning */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0 border-start border-warning border-4"
              style={{ background: "rgba(255, 193, 7, 0.1)" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-exclamation-triangle-fill text-warning me-2 fs-4"></i>
                  <h5 className="card-title fw-bold mb-0">Important: Altitude Information</h5>
                </div>
                <p className="card-text mb-0">
                  Tibet is located at high altitude (3,650m - 5,190m during this tour). Proper acclimatization is essential. 
                  We recommend spending a day in Lhasa before starting sightseeing. Symptoms of altitude sickness may include 
                  headache, nausea, and shortness of breath. Please consult your doctor before traveling to Tibet, especially 
                  if you have heart or respiratory conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Difficulty Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm border-0"
              style={{ borderLeft: "4px solid #0d6efd" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="card-title fw-bold">Tour Difficulty</h3>
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="me-3 mb-0">
                        <span className="badge bg-light text-primary border border-primary">
                          {tourInfo.difficulty}
                        </span>
                      </h4>
                    </div>
                    <p className="card-text">
                      This cultural tour is rated as moderate primarily due to the high altitude. The tour involves:
                    </p>
                    <ul>
                      <li>Extended drives on mountain roads (some unpaved sections)</li>
                      <li>Walking and climbing stairs at monasteries and palaces</li>
                      <li>High altitude throughout (3,650m - 5,190m)</li>
                      <li>Variable weather conditions</li>
                    </ul>
                    <p className="card-text">
                      Good general fitness is recommended. Allow time for acclimatization and stay hydrated. 
                      Those with heart or respiratory conditions should consult a doctor before traveling.
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div
                      className="ratio ratio-4x3 mt-3 mt-md-0 rounded shadow-sm"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?w=600')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      Potala Palace - Symbol of Tibet
                    </p>
                  </div>
                </div>
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
                  <h3 className="card-title fw-bold mb-0">What's Included</h3>
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
                  <h3 className="card-title fw-bold mb-0">What's Excluded</h3>
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

        {/* Tour Highlights */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card shadow-sm h-100 border-0"
              style={{ background: "#f8f9fa" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 px-2 py-1 me-2">
                    <i className="bi bi-star text-primary"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-0">Tour Highlights</h3>
                </div>
                <div className="row">
                  {tourInfo.highlights.map((highlight, index) => (
                    <div key={index} className="col-md-6 mb-2">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                        <span>{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
                                <i className="bi bi-clock me-1 text-primary"></i>
                                <span className="fw-medium">Duration:</span>{" "}
                                {day.duration}
                              </div>
                              <div>
                                <i className="bi bi-house me-1 text-primary"></i>
                                <span className="fw-medium">Stay:</span>{" "}
                                {day.accommodation}
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
                  <h3 className="card-title fw-bold mb-0">
                    What to Bring
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
                              Warm layers (temperatures vary greatly)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Down jacket or fleece
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Windproof and waterproof outer layer
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Thermal underwear
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Comfortable walking shoes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Warm hat and gloves
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sun hat and UV-blocking sunglasses
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Scarf or neck gaiter
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
                            <i className="bi bi-camera me-2 text-primary"></i>
                            Photography & Gear
                          </h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Camera with extra batteries
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Memory cards (plenty of storage)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Smartphone with charger
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Power bank (multiple recommended)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Universal power adapter
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Small daypack
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Water bottle (reusable)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Flashlight/headlamp
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
                              Passport and visa documents
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Travel insurance documents
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Altitude sickness medication
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Strong sunscreen (SPF 50+)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Lip balm with SPF
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Moisturizer (air is very dry)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Small cash (Chinese Yuan)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Copies of important documents
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

export default VisitTibet;
