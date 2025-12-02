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

const AnnapurnaCircuitJomsomTrek = () => {
  const trekInfo = {
    name: "Annapurna Circuit (Jomsom) & Poon Hill Trek",
    duration: "14 days",
    difficulty: "Moderate to Challenging",
    maxAltitude: "3,800 meters (12,467 feet)",
    bestSeason: "March-May & September-November",
    permits: [
      "ACAP (Annapurna Conservation Area Permit)",
      "TIMS Card (Trekkers' Information Management System)",
    ],
    highlights: [
      "World-famous sunrise view from Poon Hill (3,210m)",
      "Sacred Muktinath Temple - pilgrimage site for Hindus and Buddhists",
      "Trek through the world's deepest gorge - Kali Gandaki",
      "Natural hot springs at Tatopani",
      "Scenic flight between Annapurna and Dhaulagiri to Jomsom",
      "Beautiful apple orchards in Marpha village",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Kathmandu (1,350m)",
      description:
        "Upon your arrival at Tribhuvan International Airport, you will be greeted by a representative and transferred to your hotel. The day is free to relax and recover from your journey. In the evening, you'll have a briefing with your trekking guide about the upcoming adventure.",
      distance: "N/A",
      duration: "N/A",
    },
    {
      day: 2,
      title: "Drive from Kathmandu to Pokhara (820m)",
      description:
        "A scenic 6-7 hour drive by tourist bus takes you to the beautiful lakeside city of Pokhara. You'll enjoy stunning views of terraced hillsides, rivers, and on a clear day, the Himalayan panorama. The rest of the day is free to explore Pokhara's famous Phewa Lake.",
      distance: "200 km",
      duration: "6-7 hours drive",
    },
    {
      day: 3,
      title: "Fly to Jomsom (2,713m) & Trek to Kagbeni (2,800m)",
      description:
        "An early morning, spectacular 20-minute flight takes you between the giants Annapurna and Dhaulagiri to land in Jomsom, the wind-swept capital of the Mustang region. After breakfast in Jomsom, you begin your trek, following the Kali Gandaki riverbed (the world's deepest gorge) to the ancient village of Kagbeni. This town is the gateway to Upper Mustang and has a distinct medieval Tibetan feel.",
      distance: "11 km",
      duration: "20 min flight, 3-4 hours trek",
    },
    {
      day: 4,
      title: "Trek from Kagbeni to Muktinath (3,800m)",
      description:
        "The trail climbs steadily out of Kagbeni, offering dramatic views of the arid landscape that resembles Tibet. You'll pass through Jharkot, a village with a picturesque fortress. Your destination is Muktinath, one of the most sacred pilgrimage sites for both Hindus and Buddhists.",
      distance: "9 km",
      duration: "5-6 hours",
    },
    {
      day: 5,
      title: "Explore Muktinath (3,800m)",
      description:
        "This is an acclimatization and exploration day. Visit the holy Muktinath Temple complex, which features 108 water spouts and a perpetual flame fueled by natural gas. The views of Dhaulagiri, Tukuche Peak, and Nilgiri are breathtaking. This rest day is crucial for adapting to the altitude.",
      distance: "N/A",
      duration: "Rest day",
    },
    {
      day: 6,
      title: "Trek from Muktinath to Marpha (2,660m)",
      description:
        "A long but rewarding descent back into the Kali Gandaki Valley. You'll trek down to Jomsom and then continue to the beautiful village of Marpha, famous for its clean flagstone streets, whitewashed houses, and apple orchards. Don't miss trying the local apple brandy, cider, or pie.",
      distance: "20 km",
      duration: "5-6 hours",
    },
    {
      day: 7,
      title: "Trek from Marpha to Kalopani (2,530m)",
      description:
        "The trail continues south, descending through several villages like Tukuche and Larjung. The landscape begins to change, with more pine forests and views of the towering Dhaulagiri ice-fall. Kalopani offers one of the best panoramic mountain views of the entire trek.",
      distance: "14 km",
      duration: "5-6 hours",
    },
    {
      day: 8,
      title: "Trek from Kalopani to Tatopani (1,190m)",
      description:
        "A long descent today as you leave the dry, high desert and enter a lush, subtropical climate. You'll cross several suspension bridges and pass through Ghasa. Your reward at the end of the day is Tatopani, which means 'hot water,' where you can soak your tired muscles in the natural hot springs by the river.",
      distance: "22 km",
      duration: "6-7 hours",
    },
    {
      day: 9,
      title: "Trek from Tatopani to Ghorepani (2,855m)",
      description:
        "This is one of the toughest days as you climb steeply out of the Kali Gandaki valley. The trail ascends through beautiful rhododendron forests (which are spectacular when in bloom around March-April) and terraced farms. You'll pass through Shikha and Chitre before reaching the bustling trekking hub of Ghorepani.",
      distance: "14 km",
      duration: "7-8 hours",
    },
    {
      day: 10,
      title: "Hike to Poon Hill (3,210m) and Rest Day",
      description:
        "An early pre-dawn start for a 1-hour steep hike to Poon Hill. Your effort is rewarded with one of the most famous sunrise views in the world, a 360-degree panorama that includes Dhaulagiri, Annapurna I, Annapurna South, Machhapuchhre (Fishtail), and many more peaks. After taking in the views, you descend to Ghorepani for breakfast. The rest of the day is for relaxing and enjoying the mountain atmosphere.",
      distance: "4 km",
      duration: "2-3 hours round trip",
    },
    {
      day: 11,
      title: "Trek from Ghorepani to Birethanti & Drive to Pokhara",
      description:
        "Your final day of trekking takes you down through magnificent forests to Birethanti, a large village at the confluence of two rivers. After completing the trek, you'll drive for about 1.5 hours back to Pokhara. The evening is free to celebrate your accomplishment.",
      distance: "16 km",
      duration: "5-6 hours trek, 1.5 hours drive",
    },
    {
      day: 12,
      title: "Drive from Pokhara to Kathmandu",
      description:
        "Enjoy a final morning in Pokhara. You then take the tourist bus back to Kathmandu. Upon arrival, check into your hotel and enjoy a farewell dinner (if included in your package).",
      distance: "200 km",
      duration: "6-7 hours drive",
    },
    {
      day: 13,
      title: "Free Day in Kathmandu",
      description:
        "A contingency day for flight delays or simply a day for sightseeing, souvenir shopping, or exploring Kathmandu's UNESCO World Heritage Sites like Durbar Square, Swayambhunath (Monkey Temple), or Pashupatinath.",
      distance: "N/A",
      duration: "N/A",
    },
    {
      day: 14,
      title: "Final Departure",
      description:
        "You will be transferred to the airport approximately 3 hours before your scheduled flight back home.",
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
                Journey through the world's deepest gorge to sacred temples and stunning sunrise views
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
                  The Annapurna Circuit (Jomsom) & Poon Hill Trek combines the
                  best of Nepal's trekking experiences. Starting with a scenic
                  flight to Jomsom, you'll trek through the world's deepest
                  gorge - the Kali Gandaki Valley, visit the sacred Muktinath
                  Temple, and witness the world-famous sunrise from Poon Hill.
                </p>
                <p className="card-text">
                  This trek offers incredible diversity - from the arid,
                  Tibetan-like landscapes of Upper Mustang to lush rhododendron
                  forests and traditional Nepali villages. You'll experience
                  natural hot springs at Tatopani, apple orchards in Marpha,
                  and panoramic views of Dhaulagiri, Annapurna, and
                  Machhapuchhre peaks throughout the journey.
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
                      The Annapurna Circuit (Jomsom) & Poon Hill trek is rated
                      as moderate to challenging. While it doesn't involve
                      technical climbing, you'll need good physical fitness to
                      handle:
                    </p>
                    <ul>
                      <li>Daily walking of 5-8 hours</li>
                      <li>
                        Steep ascents, particularly from Tatopani to Ghorepani
                      </li>
                      <li>Altitude gain (maximum 3,800m at Muktinath)</li>
                      <li>Varying weather and terrain conditions</li>
                    </ul>
                    <p className="card-text">
                      Prior trekking experience is helpful but not required.
                      An acclimatization day at Muktinath is built into the
                      itinerary to minimize altitude sickness risk.
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
                      Muktinath Temple at 3,800m
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

export default AnnapurnaCircuitJomsomTrek;
