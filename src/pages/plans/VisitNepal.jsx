"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../assets/boudhanathjpg.jpg";
import img2 from "../../assets/kathmandu-valley.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaLandmark } from "react-icons/fa";

const VisitNepal = () => {
  const tourInfo = {
    name: "Visit Nepal - Kathmandu Valley Heritage Tour",
    duration: "5 days",
    difficulty: "Easy",
    bestSeason: "Year-round (Best: Sep-Nov & Feb-May)",
    groupSize: "2-15 pax",
    highlights: [
      "Kathmandu Durbar Square: UNESCO World Heritage Site with historic temples and Hanuman Dhoka Palace",
      "Living Goddess Kumari: Visit the residence of the Living Goddess in Kumari Ghar",
      "Swayambhunath (Monkey Temple): Ancient Buddhist stupa with panoramic valley views",
      "Patan Durbar Square: Exquisite Malla-era architecture and Krishna Mandir",
      "Boudhanath Stupa: One of the world's largest Buddhist stupas",
      "Pashupatinath Temple: Nepal's most sacred Hindu shrine with evening aarati ceremony",
      "Bhaktapur: The well-preserved medieval 'City of Devotees'",
      "Nyatapola Temple: Nepal's tallest pagoda-style temple",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrive in Kathmandu & Visit Kathmandu Durbar Square",
      description:
        "Upon arrival at Tribhuvan International Airport, Kathmandu, you will be met by our representative and transferred to your hotel. After lunch, explore Kathmandu Durbar Square, a UNESCO World Heritage Site filled with historic temples, Hanuman Dhoka Palace, and the residence of the Living Goddess (Kumari). The Durbar Square complex showcases the exceptional craftsmanship of the Newari artisans with its intricately carved wooden windows and pagoda-style temples. Time permitting, stroll through Asan Bazaar or local markets to experience the vibrant street life of Kathmandu. Rest of the day at leisure to relax or explore the Thamel area on your own.",
      accommodation: "Hotel in Kathmandu",
      duration: "Half day sightseeing",
    },
    {
      day: 2,
      title: "Swayambhunath, Patan Durbar Square, Boudhanath & Pashupatinath",
      description:
        "After breakfast at your hotel, visit Swayambhunath Stupa (Monkey Temple), perched on a hilltop with stunning views of Kathmandu. This ancient religious site, also known as the 'Monkey Temple' due to the holy monkeys living there, is one of the oldest Buddhist pilgrimage sites in the world. Proceed to Patan Durbar Square, the ancient royal palace complex of the Malla kings, famous for its exquisite temples, courtyards, and the magnificent Krishna Mandir. Continue to Boudhanath Stupa, one of the world's largest Buddhist stupas, where pilgrims circle the massive white dome spinning prayer wheels. The vibrant surrounding area is filled with monasteries, shops selling Tibetan crafts, and rooftop cafés perfect for sunset views. End your day at Pashupatinath Temple, Nepal's most sacred Hindu shrine dedicated to Lord Shiva, where you can witness the mesmerizing evening aarati ceremony by the Bagmati River. Observe the devout rituals, sadhus (holy men), and the poignant cremation ceremonies that take place along the temple's ghats.",
      accommodation: "Hotel in Kathmandu",
      duration: "Full day sightseeing",
    },
    {
      day: 3,
      title: "Transfer to Bhaktapur & Visit Bhaktapur Durbar Square",
      description:
        "After breakfast, drive to Bhaktapur, the 'City of Devotees' known for its well-preserved medieval architecture and rich cultural heritage. Visit Bhaktapur Durbar Square, home to the magnificent 55-Window Palace, the Golden Gate (considered one of the most beautiful and intricately worked pieces of art in the valley), and royal courtyards dating back to the Malla era. See the iconic Nyatapola Temple, the tallest pagoda-style temple in Nepal, standing at five stories high with its impressive guardian statues on each level. Explore the town's famous Pottery Square where traditional potters still practice their craft, and visit the traditional woodcarving workshops that have kept the ancient Newari craftsmanship alive for centuries. Don't miss trying the famous Juju Dhau (King Curd), a creamy yogurt that Bhaktapur is renowned for.",
      accommodation: "Hotel in Kathmandu",
      duration: "Full day excursion",
    },
    {
      day: 4,
      title: "Transfer to Pharping, Dakshinkali & Kirtipur",
      description:
        "After breakfast, drive to Pharping and visit the sacred Asura Cave, where Guru Padmasambhava (Guru Rinpoche) is believed to have meditated and attained enlightenment. Nearby, visit the Vajra Varahi Temple—key Buddhist pilgrimage sites that attract devotees from around the world. Next, proceed to Dakshinkali Temple, one of the most important Shakti Peethas in Nepal, where devotees offer sacrifices to Goddess Kali on Tuesdays and Saturdays. Continue to Kirtipur, an ancient Newari town perched on a hill overlooking the Kathmandu Valley. Explore Kirtipur's historic area, home to the Bagh Bhairav Temple (a unique temple dedicated to the tiger god) and traditional Newari houses with their distinctive architecture. Visit Chilancho Stupa, a serene Buddhist site offering panoramic views of the Kathmandu Valley and the surrounding Himalayan peaks on clear days.",
      accommodation: "Hotel in Kathmandu",
      duration: "Full day excursion",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "Depending on your flight time, enjoy a relaxed morning. You may have time for last-minute souvenir shopping or a leisurely breakfast. Transfer to Tribhuvan International Airport for your onward journey. End of Service.",
      accommodation: "N/A",
      duration: "Airport transfer",
    },
  ];

  const included = [
    "Airport pickup and drop-off in private vehicle",
    "4 nights accommodation in Kathmandu with breakfast",
    "All sightseeing tours as per itinerary with private vehicle",
    "Professional English-speaking guide throughout the tour",
    "All applicable entrance fees for monuments and heritage sites",
    "Government taxes and service charges",
  ];

  const excluded = [
    "International airfare and airport departure taxes",
    "Nepal visa fee (available on arrival)",
    "Lunch and dinner",
    "Personal expenses (laundry, telephone, beverages, etc.)",
    "Tips and gratuities for guides and drivers",
    "Travel insurance",
    "Any expenses arising due to unforeseen circumstances",
  ];

  const aboutKathmandu = {
    title: "About Kathmandu Valley",
    description: `The Kathmandu Valley, inscribed as a UNESCO World Heritage Site in 1979, represents one of the most remarkable concentrations of cultural heritage in the world. The valley encompasses seven monument zones including three Durbar Squares (Kathmandu, Patan, and Bhaktapur), two Buddhist stupas (Swayambhunath and Boudhanath), and two Hindu temple complexes (Pashupatinath and Changu Narayan).

The cultural heritage showcases the unique fusion of Hinduism and Buddhism that has flourished in Nepal for over two millennia. The Newari people, the indigenous inhabitants of the valley, have developed exceptional craftsmanship in brick, stone, timber, and bronze that remains some of the most highly developed in the world.

The valley's artistic and architectural achievements reached their peak during the Malla period (1200-1769 AD), when the three kingdoms of Kathmandu, Patan, and Bhaktapur competed to build ever more magnificent palaces and temples, creating the extraordinary urban landscapes we see today.`,
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
                alt="Visit Nepal Heritage Tour"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{tourInfo.name}</h1>
              <p className="lead">
                Explore the UNESCO World Heritage Sites of Kathmandu Valley
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
                  {aboutKathmandu.description.split('\n\n')[0]}
                </p>
                <p className="card-text">
                  {aboutKathmandu.description.split('\n\n')[1]}
                </p>
                <p className="card-text">
                  {aboutKathmandu.description.split('\n\n')[2]}
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
                      This heritage tour is rated as easy and is suitable for travelers of all ages and fitness levels. The tour involves:
                    </p>
                    <ul>
                      <li>Comfortable vehicle transfers between sites</li>
                      <li>Easy walking through heritage sites and temple complexes</li>
                      <li>Some steps at temple sites (optional viewpoints)</li>
                      <li>All activities at low altitude (1,300-1,400m)</li>
                    </ul>
                    <p className="card-text">
                      No prior travel experience is required. Comfortable walking shoes are recommended for exploring the cobblestone squares and temple areas.
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div className="ratio ratio-4x3 mt-3 mt-md-0">
                      <img
                        src={img1}
                        className="img-fluid rounded shadow-sm object-fit-cover"
                        alt="Kathmandu Heritage Sites"
                      />
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      UNESCO World Heritage Sites of Kathmandu Valley
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
                              Comfortable walking clothes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Light layers (temperatures vary)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Modest clothing for temple visits
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Light rain jacket (monsoon season)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Comfortable walking shoes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Socks (for temple entry)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sun hat or cap
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Warm layer for evenings
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
                              Power bank
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
                              Guidebook or maps
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
                              Prescription medications
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunscreen and lip balm
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunglasses
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Hand sanitizer
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Small cash (Nepali Rupees)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Credit/debit cards
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

export default VisitNepal;
