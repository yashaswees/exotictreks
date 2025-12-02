"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../assets/pangsang.jpg";
import img2 from "../../assets/rubi.jpg";
import Navbar from "../../components/Navbar";
import { CiMountain1 } from "react-icons/ci";
import Footer from "../../components/Footer";
import { TbShoe } from "react-icons/tb";

const RubiValleyTrek = () => {
  const trekInfo = {
    name: "Rubi Valley Trek",
    duration: "7 days",
    difficulty: "Moderate",
    maxAltitude: "3,845 meters (12,614 feet) - Pangsang Pass",
    bestSeason: "Feb-Jun & Sep-Dec",
    region: "Ganesh Himal Region",
    groupSize: "2-10",
    accommodation: "Homestay/Local Lodge",
    meals: "All Local Meals (Breakfast, Lunch & Dinner)",
    permits: [
      "Langtang National Park Entry Permit",
      "TIMS Card (Trekkers' Information Management System)",
    ],
    highlights: [
      "Off the beaten track and unexplored trekking destination close to Kathmandu",
      "Relaxing natural hot springs",
      "Panoramic closeup views of Ganesh Himal, Langtang Himal, and Manaslu Himal",
      "Pangsang La Pass (3,842m / 12,604ft)",
      "Diverse terrain: farmland, green meadows, and rocky hills",
      "Dense rhododendron, pine, oak, and bamboo forests",
      "Unique culture and traditions of Tamang, Gurung, Brahmin, and Dalits",
      "Authentic homestay experience in traditional villages",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Kathmandu to Syabrubesi (1,503m / 4,945ft)",
      description:
        "You will start your Rubi Valley journey through a drive to Syabrubesi. We will be driving into Langtang National Park, where we must register our trek permits. The 7 to 8 hours scenic drive following the Trisuli Bazaar, Ramche Gaon, and Dhunche is undoubtedly a pleasant ride. The road is a bit narrow and rocky, but the alluring landscape will leave you in awe. We spend the night in Syabrubesi. Syabrubesi, being the mid-point of several treks and the border of China, has all the things you might require for the trek.",
      distance: "122 km",
      duration: "7-9 hours drive",
    },
    {
      day: 2,
      title: "Trek from Syabrubesi to Gatlang (2,337m / 7,690ft)",
      description:
        "Our destination for today is a small Tamang village called Gatlang. We follow a narrow and twisty trail to Bahun Dada Pass and then descend to reach Gatlang. We stop at Chawatar for lunch. The food is amazingly delicious here as most of the vegetables are freshly picked and locally grown. As we pass through this magnificent Tamang village, we witness the richness of their culture and tradition. We stay at Gatlang with the Tamang people. Their hospitality and food will prove to be one of the best experiences you will ever get.",
      distance: "N/A",
      duration: "5-6 hours trek",
    },
    {
      day: 3,
      title: "Trek from Gatlang to Somdang (3,271m / 10,760ft)",
      description:
        "We begin the hike from Gatlang to Parvati Kunda, a natural alpine freshwater lake named after the famous Hindu Goddess Parvati. As you trek further ahead, the habitat and lodges decrease. We continue the trail through lush pine and rhododendron forest to Yuri Kharka. After a delicious meal, we hike towards Somdang via Khurphu Bhanjyang. There is a shutdown mine near Somdang that used to produce zinc, copper, tin, and crystals (including rubies). The valley is so remote and silent you will literally find out what silence looks like.",
      distance: "N/A",
      duration: "6-7 hours trek",
    },
    {
      day: 4,
      title: "Trek from Somdang via Pangsang Pass (3,842m) to Tipling (2,078m)",
      description:
        "After waking up at Somdang, we enjoy a delicious breakfast. On this day, you will be passing through the Pangsang La Pass, which is a demanding, yet exciting trek. While appreciating the stunning mountains and spectacular landscapes, we head to the southwest of Somdang Village to reach Pangsang Kharka—a large meadow that lies in Pangsang Pass. From here, you can witness panoramic views of Mount Manaslu and the Ganesh Himal Range. Then, we descend to Laptung village, passing through dense fir and rhododendron forests until we arrive at Tipling.",
      distance: "N/A",
      duration: "6-7 hours trek",
    },
    {
      day: 5,
      title: "Trek from Tipling to Chalish Gaon (1,800m / 5,960ft)",
      description:
        "Today's trek will be a short and relaxing one as we trek our way to the sister villages of Shertung and Chalish Gaon. First, we descend through the serene jungle, cross a tributary and reach Chalish Gaon, which lies in an idyllic setting. About 100m above Chalish Gaon is Shertung village, and both of these settlements have a lot to explore. You can choose to relax and enjoy the spectacular surrounding fields and lush valley below. Shertung and Chalish Gaon are inhabited mainly by Gurungs, Tamangs, and Dalits.",
      distance: "N/A",
      duration: "2 hours trek",
    },
    {
      day: 6,
      title: "Trek from Chalish to Borang (1,700m), Drive to Dhading Besi (580m)",
      description:
        "A final day before you return to Kathmandu, you will enjoy all the wonderments of this trail. After a pleasant breakfast, we will hike further to Borang village then descend to Lishne Khola from Borang. From Borang, we take a local jeep to take us through a curvy road past Ankhu Khola and Kimdang Phedi Villages to Dhading Besi. As you return, you will see several peaceful settlements, which will make you nostalgic. We will be staying at Dhading Besi for the night.",
      distance: "N/A",
      duration: "2-3 hours trek, 4-5 hours drive",
    },
    {
      day: 7,
      title: "Drive from Dhading Besi to Kathmandu (1,310m / 4,323ft)",
      description:
        "We take another bus from Dhading Besi to Kathmandu back to your hotel. If you want, we can arrange a Kathmandu city tour taking you to several world heritage sites. As beautiful as the surrounding mountains, the culture in and around Kathmandu City is a must-see before you call it an end to your vacation.",
      distance: "N/A",
      duration: "4-5 hours drive",
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
                An unexplored hidden gem in the Ganesh Himal region with authentic homestay experiences
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
                  The Rubi Valley Trek is a hidden gem in the Ganesh Himal region
                  of Nepal. This week-long adventure offers trekkers an off-the-beaten-path
                  experience with authentic cultural immersion in traditional Tamang and
                  Gurung villages. With fewer tourists than the popular trails, you'll
                  enjoy spectacular mountain views, making it the perfect escape for
                  those seeking peace, pristine nature, and genuine local interactions.
                </p>
                <p className="card-text">
                  The trek takes you through the pristine Rubi Valley—named for its
                  deposits of precious stones—where you'll traverse diverse landscapes,
                  ranging from terraced fields and dense forests to high alpine pastures.
                  Along the way, natural hot springs and waterfalls punctuate your journey,
                  while expansive ridgelines offer panoramic views of 23 snow-capped mountains
                  including Manaslu, Ganesh Himal Range, Annapurna Range, and Langtang Range.
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
                      The Rubi Valley Trek is rated as moderate. While it doesn't
                      involve technical climbing, you'll need reasonable physical
                      fitness to handle:
                    </p>
                    <ul>
                      <li>Approximately 6-7 hours walking per day</li>
                      <li>
                        Crossing Pangsang La Pass at 3,842m elevation
                      </li>
                      <li>Varied terrain including forests, meadows, and rocky trails</li>
                      <li>Basic accommodation in homestays and local lodges</li>
                    </ul>
                    <p className="card-text">
                      Prior trekking experience is helpful but not required.
                      The trek is suitable for anyone with moderate fitness
                      who enjoys walking in nature and cultural experiences.
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
                      Pangsang La Pass at 3,842m
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

export default RubiValleyTrek;
