"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaLandmark } from "react-icons/fa";

const VisitIndia = () => {
  const tourInfo = {
    name: "Visit India - Golden Triangle & Spiritual Journey",
    duration: "8 days",
    difficulty: "Easy",
    bestSeason: "Year-round (Best: Oct-Mar)",
    groupSize: "2-15 pax",
    highlights: [
      "Taj Mahal: Marvel at one of the Seven Wonders of the World at sunrise",
      "Jaipur Pink City: Explore the magnificent Amber Fort and Hawa Mahal",
      "Delhi Heritage: Visit Red Fort, Qutub Minar, and India Gate",
      "Varanasi: Experience the spiritual Ganga Aarti ceremony",
      "Agra Fort: UNESCO World Heritage Site with stunning Mughal architecture",
      "Jantar Mantar: Ancient astronomical observation site",
      "Local Cuisine: Authentic North Indian culinary experiences",
      "Rickshaw Rides: Traditional transport through old city lanes",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrive in Delhi",
      description:
        "Upon arrival at Indira Gandhi International Airport, you will be warmly welcomed by our representative and transferred to your hotel. Depending on your arrival time, you may have the opportunity to explore the vibrant capital city at your own pace. Delhi, with its rich tapestry of history spanning several empires, offers a fascinating blend of ancient monuments and modern infrastructure. Rest and acclimatize for the adventures ahead.",
      accommodation: "Hotel in Delhi",
      duration: "Airport transfer & leisure",
    },
    {
      day: 2,
      title: "Delhi Sightseeing - Old & New Delhi",
      description:
        "After breakfast, embark on a full-day exploration of Delhi. Begin with Old Delhi, visiting the magnificent Red Fort, a UNESCO World Heritage Site built by Mughal Emperor Shah Jahan. Walk through Chandni Chowk, one of India's oldest and busiest markets, and visit Jama Masjid, India's largest mosque. After lunch, explore New Delhi's imperial grandeur including India Gate, Parliament House, and the President's residence. Visit Qutub Minar, the tallest brick minaret in the world, and Humayun's Tomb, a precursor to the Taj Mahal.",
      accommodation: "Hotel in Delhi",
      duration: "Full day sightseeing",
    },
    {
      day: 3,
      title: "Delhi to Agra - Taj Mahal at Sunset",
      description:
        "After breakfast, drive to Agra (approximately 4 hours). Upon arrival, check into your hotel and have lunch. In the afternoon, visit Agra Fort, a massive red sandstone fort that was the main residence of the Mughal emperors until 1638. The fort contains many beautiful palaces, audience halls, and mosques. As the sun begins to set, make your way to the iconic Taj Mahal. Watch as this marble masterpiece transforms through golden hues, creating magical photo opportunities. The Taj Mahal, built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, is a testament to eternal love.",
      accommodation: "Hotel in Agra",
      duration: "4-hour drive + sightseeing",
    },
    {
      day: 4,
      title: "Taj Mahal Sunrise & Drive to Jaipur",
      description:
        "Wake before dawn to witness the Taj Mahal at sunrise - arguably the most magical time to see this monument. The soft morning light creates an ethereal glow on the white marble, and the gardens are peaceful and serene. After this unforgettable experience, return to your hotel for breakfast. Later, drive to Jaipur (approximately 5 hours), stopping at Fatehpur Sikri en route - the abandoned Mughal capital built by Emperor Akbar in the 16th century. Arrive in Jaipur and check into your hotel.",
      accommodation: "Hotel in Jaipur",
      duration: "Sunrise visit + 5-hour drive",
    },
    {
      day: 5,
      title: "Jaipur - The Pink City",
      description:
        "After breakfast, begin your exploration of Jaipur, India's first planned city. Visit the magnificent Amber Fort, ascending by jeep to this stunning hilltop fortress with its intricate mirror work and marble panels. Explore the City Palace, a beautiful blend of Rajasthani and Mughal architecture still partially occupied by the royal family. Visit Jantar Mantar, an astronomical observation site built in the early 18th century with the world's largest stone sundial. Stop for photos at Hawa Mahal (Palace of Winds), the iconic pink sandstone facade with 953 small windows. Evening free for shopping in Jaipur's famous bazaars for textiles, jewelry, and handicrafts.",
      accommodation: "Hotel in Jaipur",
      duration: "Full day sightseeing",
    },
    {
      day: 6,
      title: "Jaipur to Varanasi (Flight)",
      description:
        "After a leisurely breakfast, transfer to Jaipur airport for your flight to Varanasi - one of the world's oldest continuously inhabited cities and the spiritual capital of India. Upon arrival, transfer to your hotel near the ghats. In the evening, witness the spectacular Ganga Aarti ceremony at Dashashwamedh Ghat, where priests perform an elaborate ritual of fire worship with brass lamps, incense, and flower offerings to the sacred River Ganges. The ceremony, accompanied by devotional songs and the ringing of bells, is a profound spiritual experience.",
      accommodation: "Hotel in Varanasi",
      duration: "Flight + evening Aarti",
    },
    {
      day: 7,
      title: "Varanasi - Spiritual Exploration",
      description:
        "Rise early for a boat ride on the Ganges at sunrise. Glide past the ancient ghats as pilgrims perform their morning rituals, priests offer prayers, and the city awakens to another day. This is one of India's most iconic and moving experiences. After breakfast, explore the narrow lanes of the old city, visiting the Kashi Vishwanath Temple (Golden Temple), one of the 12 Jyotirlingas dedicated to Lord Shiva. Visit the Buddhist site of Sarnath, where Lord Buddha gave his first sermon after attaining enlightenment. The Dhamek Stupa and archaeological museum here offer insights into Buddhist history.",
      accommodation: "Hotel in Varanasi",
      duration: "Sunrise boat ride + sightseeing",
    },
    {
      day: 8,
      title: "Departure from Varanasi",
      description:
        "Depending on your flight time, you may have the opportunity for a final morning boat ride or visit to the ghats. Transfer to Lal Bahadur Shastri International Airport for your onward journey. Depart with memories of India's incredible heritage, spirituality, and warm hospitality. End of Service.",
      accommodation: "N/A",
      duration: "Airport transfer",
    },
  ];

  const included = [
    "Airport pickup and drop-off in private air-conditioned vehicle",
    "7 nights accommodation with breakfast",
    "All sightseeing tours as per itinerary with private vehicle",
    "Professional English-speaking guide throughout the tour",
    "All applicable entrance fees for monuments and heritage sites",
    "Boat ride on the Ganges in Varanasi",
    "Elephant/Jeep ride at Amber Fort, Jaipur",
    "Domestic flight Jaipur to Varanasi",
    "Government taxes and service charges",
  ];

  const excluded = [
    "International airfare and airport departure taxes",
    "Indian visa fee",
    "Lunch and dinner",
    "Personal expenses (laundry, telephone, beverages, etc.)",
    "Tips and gratuities for guides and drivers",
    "Travel insurance",
    "Camera fees at monuments",
    "Any expenses arising due to unforeseen circumstances",
  ];

  const aboutIndia = {
    title: "About India",
    description: `India, the land of diverse cultures, ancient traditions, and breathtaking landscapes, offers an unparalleled travel experience. From the snow-capped Himalayas in the north to the tropical beaches in the south, India's geographical diversity is matched only by its cultural richness.

The Golden Triangle circuit - Delhi, Agra, and Jaipur - represents the perfect introduction to India's magnificent heritage. This route showcases the grandeur of Mughal architecture, the opulence of Rajput royalty, and the spiritual depth that defines Indian civilization.

Varanasi, one of the oldest living cities in the world, adds a spiritual dimension to your journey. Here, life and death exist in harmony along the sacred Ganges, and ancient rituals continue unchanged for millennia. This combination of history, spirituality, and vibrant culture makes India a destination that transforms all who visit.`,
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
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{tourInfo.name}</h1>
              <p className="lead">
                Discover the Golden Triangle & Spiritual Heart of India
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
                  {aboutIndia.description.split('\n\n')[0]}
                </p>
                <p className="card-text">
                  {aboutIndia.description.split('\n\n')[1]}
                </p>
                <p className="card-text">
                  {aboutIndia.description.split('\n\n')[2]}
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
                      This cultural tour is rated as easy and is suitable for travelers of all ages and fitness levels. The tour involves:
                    </p>
                    <ul>
                      <li>Comfortable air-conditioned vehicle transfers between cities</li>
                      <li>Easy to moderate walking through heritage sites</li>
                      <li>Some steps at forts and monuments</li>
                      <li>Early morning activities (sunrise visits)</li>
                    </ul>
                    <p className="card-text">
                      Comfortable walking shoes are essential. Be prepared for warm weather (Oct-Mar is cooler) and carry a light jacket for air-conditioned spaces and evening outings.
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div
                      className="ratio ratio-4x3 mt-3 mt-md-0 rounded shadow-sm"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      Iconic Taj Mahal - A Wonder of the World
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
                              Light, breathable cotton clothes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Modest clothing for temple visits
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Scarf or shawl (for temples)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Light jacket for AC and evenings
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Comfortable walking shoes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sandals or slip-on shoes (for temples)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sun hat or cap
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Swimwear (if hotel has pool)
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
                              Guidebook or offline maps
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
                              Sunscreen (SPF 50+)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunglasses
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Hand sanitizer & wet wipes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Small cash (Indian Rupees)
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

export default VisitIndia;
