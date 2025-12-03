"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaWater } from "react-icons/fa";

const Rafting = () => {
  const activityInfo = {
    name: "White Water Rafting in Nepal",
    difficulty: "Grade 2-5+",
    bestSeason: "Oct-Dec & Mar-May",
    groupSize: "4-12 pax",
  };

  const riverTrips = [
    {
      name: "Bhote Koshi River",
      duration: "2 Days",
      grade: "Grade 4-5",
      description:
        "The Bhote Kosi is known as the River from Tibet and you can start a trip after a peek over the border into Tibet. The Kathmandu / Lhasa Highway (AKA Friendship Highway, Arniko Highway) runs along beside the river. You can run a day trip or do a two-day expedition and run parts of the river twice. It's a great beginner river for rafters and fun for kayakers at all levels. Bhote Koshi is the beautiful adventure trip with very steep and basically non-stop mountain river only 3 hours drive from Kathmandu offering two days of intense and challenging river activity.",
      highlights: [
        "Only 3 hours from Kathmandu",
        "View of Tibet border",
        "Intense white water rapids",
        "Option for day trip or 2-day expedition",
      ],
    },
    {
      name: "Kali Gandaki River",
      duration: "3 Days",
      grade: "Grade 3-4+",
      description:
        "A deservedly popular and medium length river trip combining exhilarating white water with fine scenery. One of the famous names of Himalayan Rivers, The Kali Gandaki rises in Mustang, an enclave of Nepal poking into Tibet on the other side of the Himalayas. As it tumbles down between the majestic Dhaulagiri and the Annapurna ranges, it creates one of the world's deepest gorges. All day you have continuous paddling against technical rapids on the Kali Gandaki River. Both experienced and novice rafters love this. Nowhere else is it possible to find such diversity on a 3-day raft trip. Nice drops, sparkling chutes and turbulent rapids provide class III to IV+ runs during the fall and spring seasons.",
      highlights: [
        "World's deepest gorge scenery",
        "Views of Dhaulagiri and Annapurna",
        "Mix of technical and fun rapids",
        "Option to visit Chitwan or trek afterwards",
      ],
    },
    {
      name: "Marshyangdi River",
      duration: "5 Days",
      grade: "Grade 4-5",
      description:
        "Marshyangdi is the raging river in Nepal and describes one of the best whitewater runs in the world. One of the best class 4 kayaking rivers in the world - continuous, exhilarating whitewater with magnificent mountain backdrops. Recommended for expert kayakers and rafters. If it's adventure you seek, you'll find it on this trip with one day of easy trekking and five days of intense rafting. Only recently opened for commercial rafting (many rapids have not been named yet), the Marshyangdi is one of the next generation of rivers in Nepal, steeper and with a much more continuous stretch of rapids.",
      highlights: [
        "One of the best whitewater runs in the world",
        "Magnificent mountain backdrops",
        "Recently opened for commercial rafting",
        "Includes one day of trekking",
      ],
    },
    {
      name: "Seti River",
      duration: "2 Days",
      grade: "Grade 2-3",
      description:
        "Seti River offers beautiful mountain views and passes through two beautiful and contrasting scenic areas of Manaslu and Annapurna regions. This river has relatively small volume but blue and warm water - ideal for first-time rafters or as 'warm-up' for intermediate kayakers. Seti is the best river for learning kayak in Nepal. The water temperature is incredibly warm, making it a popular choice for winter trips and kayak clinics. Most of the year, the Seti is a gentle river, attracting families, bird watchers, nature lovers and dreamers. The luxuriant vegetation visible along the river is a remnant of the vast forested area which once covered the middle hills of Nepal.",
      highlights: [
        "Perfect for beginners and families",
        "Warm water - ideal for winter trips",
        "Best river for learning kayaking",
        "Beautiful Manaslu and Annapurna views",
      ],
    },
    {
      name: "Sun Koshi River",
      duration: "9 Days",
      grade: "Grade 3-5",
      description:
        "One of the 10 classic and best white water journeys in the world, Sunkoshi (river of gold) offers the longest river trip in Nepal and is the most fascinating among rivers flowing down from snow-capped mountains. Big rapids, warm water, beautiful scenery and great camping make this a classic multi-day river trip. This enchanting 9-day river expedition will definitely be the highlight of your visit to Nepal. Sunkoshi is an unpredictable river with its own moods - serene, calm and tranquil one moment, wild and turbulent the next, always changing, always challenging. Within a short span of 9 days, you come in close contact with Nepal's natural beauty, people, culture, wildlife and its rivers.",
      highlights: [
        "One of world's top 10 classic river journeys",
        "Nepal's longest river trip",
        "250 species of orchids and 400 species of birds",
        "Experience diverse ethnic cultures",
      ],
    },
    {
      name: "Trishuli River",
      duration: "3 Days",
      grade: "Grade 2-3",
      description:
        "Rafting on the Trishuli River is an excellent opportunity to observe the diversity of demography, landscapes, cultural heritage and flora and fauna. The Trishuli River is the most easily accessible from Kathmandu, Pokhara and Royal Chitwan National Park. A trip on this river can be made for varied duration depending upon availability of time and interest. Scenic valleys and impressive gorges, exhilarating rapids and easier sections as well as the right amount of time all make it the perfect trip for first-time or experienced rafters.",
      highlights: [
        "Most accessible river from major cities",
        "Perfect for all skill levels",
        "Scenic valleys and impressive gorges",
        "Flexible duration options",
      ],
    },
  ];

  const included = [
    "Professional river guide and safety kayakers",
    "All rafting equipment (raft, paddles, helmets, life jackets)",
    "Camping equipment (tents, sleeping bags, mattresses)",
    "All meals during the trip",
    "Transportation to/from put-in and take-out points",
    "First aid kit and safety equipment",
    "Permits and fees",
  ];

  const excluded = [
    "Personal travel insurance (mandatory)",
    "Personal expenses",
    "Tips and gratuities",
    "Alcoholic beverages",
    "Personal gear (swimwear, sandals, sunscreen)",
    "Any expenses arising from unforeseen circumstances",
  ];

  const aboutRafting = {
    title: "White Water Rafting in Nepal",
    description: `Nepal has earned the reputation of one of the best destinations for white water rafting. Cruising down rushing rivers of crashing waves and swirling rapids can make up the excitement of a lifetime. Rafting trips for some is the highlight of their stay in Nepal.

The waters in Nepal offer something for everybody: Grade 5-5+ rivers with raging white water rapids for the adventurous, to Grade 2-3 rivers with a few rapids for novices. Rafters also have a choice ranging from two to three-week trips to trips of two or three days.

The options include paddling, oaring and kayaking. Paddling requires all on boat to participate with instructions from the river runner. Luxury safari-style trips with full team are available too. In an oar boat, the guide rows alone giving participants a chance to observe the surroundings. Kayaking is another way to travel downstream - some companies offer inflatable kayaks or fiberglass kayaks for hire.`,
  };

  const safetyInfo = {
    title: "Safety & Preparation",
    description: `A typical day in the river begins early morning when participants arrive at the site. Instructions on safety and emergency situations are given to participants before the event. Life vests and helmets are worn by participants at all times during the trip. Meals are provided during the trip and some packages also provide river equipment and camping equipment.

The best time for rafting is from October through mid-December and March through early May. In winter, hypothermia may be a hindrance to some. During monsoon months of June through September, the white water sections are dangerous, but gentler stretches are easy to raft on. So far the government has opened sections of 10 rivers for commercial rafting.`,
  };

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
              <h1 className="fw-bold">{activityInfo.name}</h1>
              <p className="lead">
                Experience the thrill of Nepal's legendary rivers
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
                <h2 className="card-title fw-bold">About Rafting in Nepal</h2>
                <p className="card-text">
                  {aboutRafting.description.split("\n\n")[0]}
                </p>
                <p className="card-text">
                  {aboutRafting.description.split("\n\n")[1]}
                </p>
                <p className="card-text">
                  {aboutRafting.description.split("\n\n")[2]}
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
                <h3 className="card-title fw-bold mb-4">Quick Facts</h3>

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
                    <div className="text-muted small">River Grades</div>
                    <div className="fw-medium">{activityInfo.difficulty}</div>
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
                    <div className="text-muted small">Best Season</div>
                    <div className="fw-medium">{activityInfo.bestSeason}</div>
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
                    <div className="fw-medium">{activityInfo.groupSize}</div>
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
                    {safetyInfo.title}
                  </h3>
                </div>
                <p className="card-text">{safetyInfo.description}</p>
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
                  <h3 className="card-title fw-bold mb-0">What to Bring</h3>
                </div>
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
                          Quick-dry shorts/pants
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Synthetic T-shirts
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Swimwear
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Light fleece or jacket
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          River sandals with straps
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Hat with chin strap
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
                        <i className="bi bi-droplet me-2 text-primary"></i>
                        Waterproof Gear
                      </h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Waterproof bag/dry bag
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Waterproof camera case
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Waterproof sunscreen (SPF 50+)
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Sunglasses with strap
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Rain jacket
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
                          Personal medications
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Insect repellent
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Lip balm with SPF
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Towel (quick-dry)
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Headlamp/flashlight
                        </li>
                        <li className="list-group-item border-0 py-1 bg-transparent">
                          Cash (Nepali Rupees)
                        </li>
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
