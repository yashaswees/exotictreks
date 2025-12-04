"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../assets/chitwan_BW.jpg";
import img2 from "../../assets/bird-watching.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GiHummingbird } from "react-icons/gi";

const BirdWatching = () => {
  const trekInfo = {
    name: "Bird Watching Tour",
    duration: "15 days",
    difficulty: "Easy to Moderate",
    maxAltitude: "2,732 meters (Phulchowki Hill)",
    bestSeason: "October-April (Peak: Nov-Mar)",
    groupSize: "10 pax",
    cost: "1,255 USD per person",
    singleSupplement: "190 USD",
    permits: [
      "Chitwan National Park Entry Permit",
      "Shivapuri Nagarjun National Park Entry Permit",
    ],
    highlights: [
      "Rani Bari Community Forest: One of the few remaining natural forest patches in urban Nepal",
      "Chitwan National Park: A UNESCO World Heritage Site with grasslands, rivers, and forests ideal for rare and endangered birds",
      "Shivapuri Nagarjun National Park: A pristine forest near Kathmandu, perfect for high-altitude species",
      "Spot Nepal's only endemic bird - the Spiny Babbler",
      "Endangered species like the Bengal Florican and Great Hornbill",
      "Scenic birding alongside stunning Himalayan views in Pokhara and Bandipur",
      "Over 500 bird species across diverse ecosystems",
    ],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrive in Kathmandu and Transfer to Rani Bari",
      description:
        "Upon arrival at Tribhuvan International Airport, Kathmandu, you will be met by our representative. Then you will visit Rani Bari Community Forest for bird sighting—a charming hilltop area with mixed forests offering excellent bird diversity and occasional raptor sightings. After the tour, transfer to your hotel.",
      accommodation: "Nirvana Boutique Hotel, Kathmandu",
      duration: "Half day birding",
    },
    {
      day: 2,
      title: "Transfer to Phulchowki",
      description:
        "After breakfast, your second day unfolds with a journey to Phulchowki Hill, a renowned birding paradise near Kathmandu. Amidst verdant forests and diverse flora, birdwatchers marvel at the rich avifauna, including the elusive Himalayan Cutia and Kalij Pheasant. Each fluttering wing and melodious chirp adds to the enchantment of this biodiverse haven.",
      accommodation: "Nirvana Boutique Hotel, Kathmandu",
      duration: "Full day birding",
    },
    {
      day: 3,
      title: "Transfer to Pokhara",
      description:
        "Our journey towards Pokhara will start early in the morning. A tourist bus will take about 7-8 hours to reach there. The distant view of mountains along the way and beautiful green hills will entice you throughout the journey. Upon arrival in Pokhara, you will be taken to your hotel near Phewa Lake where you can enjoy the beautiful evening scenes of Phewa Lake and its surroundings.",
      accommodation: "Hotel Haven O'Ganga, Pokhara",
      duration: "6-7 hours drive",
    },
    {
      day: 4,
      title: "Birding at Pokhara (Phewa Lake)",
      description:
        "Today, after breakfast, we will spend the day bird watching and exploring near the Phewa Lake wetland area. Pame is the best place for water birds where you can see many winter visitors like Greater White-fronted Goose, Greylag Geese, Tufted Duck, and many other wetland birds. After exploration, we will return to the hotel for lunch, then go exploring in the evening around the Peace Pagoda (Shanti Stupa) for birding.",
      accommodation: "Hotel Haven O'Ganga, Pokhara",
      duration: "Full day birding",
    },
    {
      day: 5,
      title: "Birding at Pokhara (Begnas Lake)",
      description:
        "Today will be spent bird watching and exploring the area around Begnas Lake. After breakfast, we will drive from Pokhara up the hill for birdwatching. The hill presents great views of the lake and snow-capped mountains, and around us, we can see many local resident bird species. We will explore Pachabhaiya Danda and have lunch. After that, we head back down to explore the lovely lake and return to Pokhara for overnight.",
      accommodation: "Hotel Haven O'Ganga, Pokhara",
      duration: "Full day birding",
    },
    {
      day: 6,
      title: "Transfer to Bandipur",
      description:
        "After breakfast, you will be travelling to Bandipur. During winters, the number of birds doubles with the visit of numerous migratory birds. Many endangered bird species can be found here including Bengal Florican, Peafowl, Sarus Crane, and Lesser Florican—some of the famous birds of the region.",
      accommodation: "The Old Inn, Bandipur",
      duration: "2.5 hours drive + birding",
    },
    {
      day: 7,
      title: "Transfer to Chitwan",
      description:
        "It will take about 3 hours' drive to Chitwan National Park after breakfast. Check in at the hotel, then visit the Tharu Villages in the evening. You can also visit the breeding center for elephants.",
      accommodation: "Jungle Safari Lodge, Chitwan",
      duration: "3 hours drive",
    },
    {
      day: 8,
      title: "Full Day Birding at Chitwan",
      description:
        "Start with an early meal and gentle walks to observe morning birds in their natural habitat while enjoying the fresh weather. Explore diverse landscapes, from farmlands and wetlands to Sal forests, maximizing sightings across different ecosystems. Venture into dense forests for a thrilling safari, spotting over 500 bird species including kingfishers, flycatchers, woodpeckers, and other exotic birds.",
      accommodation: "Jungle Safari Lodge, Chitwan",
      duration: "Full day birding & safari",
    },
    {
      day: 9,
      title: "Exploration at Chitwan",
      description:
        "Begin your birdwatching adventure after breakfast, with chances to spot rare wildlife like one-horned rhinos and Bengal tigers alongside exotic birds. Discover endangered birds thriving in Chitwan's diverse ecosystems, especially during spring and fall migrations, including storks, herons, and rare waterfowl. Witness unique species like the Brown-cheeked Rail (first recorded in Chitwan), along with vibrant kingfishers, jacanas, and crakes in their natural wetland habitat.",
      accommodation: "Jungle Safari Lodge, Chitwan",
      duration: "Full day exploration",
    },
    {
      day: 10,
      title: "Transfer to Hetauda",
      description:
        "After an early breakfast in Chitwan, enjoy a smooth 3-4 hour drive to Hetauda (elevation: 474m), a warm winter refuge for high-altitude birds descending from the Mahabharat Range. Explore prime sites like the Rapti River, Fish Farming Area, and Forestry Campus, where Sal woodlands and water bodies attract species such as the rare Ibisbill, red-vented bulbuls, and mynas. Hetauda's Dun Hills and river-fed wetlands create a perfect habitat for both migratory and resident birds.",
      accommodation: "Hotel in Hetauda",
      duration: "3-4 hours drive + birding",
    },
    {
      day: 11,
      title: "Transfer to Kathmandu via Taudaha Lake",
      description:
        "After breakfast, you will return to Kathmandu. Upon arrival, you will visit Taudaha Lake, located in Kathmandu Valley—a popular spot for bird watching. The lake is known for its rich ecosystem and serves as a transit point for migratory birds traveling from various parts of Asia, including Tibet, China, and Siberia.",
      accommodation: "Nirvana Boutique Hotel, Kathmandu",
      duration: "6 hours drive + birding",
    },
    {
      day: 12,
      title: "Visit Shivapuri National Park",
      description:
        "Your guide will take you to prime birding spots, including habitats of the striking Long-tailed Broadbill, ensuring excellent sightings in this protected area. With no vehicle disturbances, enjoy peaceful walks along motorable roads, spotting diverse bird species in their natural surroundings. The trail leads to Nagi Gompa, a serene Buddhist monastery, offering breathtaking views of Kathmandu Valley before a relaxing return to your hotel.",
      accommodation: "Nirvana Boutique Hotel, Kathmandu",
      duration: "Full day birding",
    },
    {
      day: 13,
      title: "Sunrise Birding at Swayambhunath",
      description:
        "Explore the wooded slopes of this UNESCO-listed 'Monkey Temple,' spotting Himalayan griffons, rose-ringed parakeets, spotted doves, and Eurasian eagle-owls (if at dusk). Combine birding with panoramic views of Kathmandu Valley and ancient Buddhist stupas. Conclude your day with a relaxed return to the hotel for dinner and rest, balancing adventure with comfort.",
      accommodation: "Nirvana Boutique Hotel, Kathmandu",
      duration: "Half day birding",
    },
    {
      day: 14,
      title: "Birding at Manohara River",
      description:
        "After breakfast, journey to Manohara River. The river's banks serve as a popular birdwatching spot near Kathmandu, especially along the route to Bhaktapur, offering convenient access to diverse avian species. Its wetlands and surrounding ecosystems attract a wide variety of birds, making it excellent for both birdwatching and nature photography. Spot species like Egrets, Herons, Kingfishers, Ibisbill, Wood Sandpipers, and Plovers along the riverbanks. Leisure time in the evening.",
      accommodation: "Nirvana Boutique Hotel, Kathmandu",
      duration: "Half day birding",
    },
    {
      day: 15,
      title: "Departure",
      description:
        "Depending on your flight time, enjoy a relaxed morning. Transfer to the airport for your onward journey. End of Service.",
      accommodation: "N/A",
      duration: "Airport transfer",
    },
  ];

  const included = [
    "Airport Transfers: All international and domestic transfers via comfortable tourist vehicles",
    "Hotels: Rooms at hotels in Kathmandu, Pokhara, Bandipur, Chitwan & Hetauda (with breakfast)",
    "Administrative Fees: All related administrative expenses and government taxes",
    "Expert birdwatching guide throughout the tour",
    "Lunch Box for Phulchowki & Shivapuri excursions",
    "Breakfast and Dinner at Bandipur",
    "Full board meals in Chitwan (Breakfast, Lunch and Dinner)",
    "All Jungle safari activities in Chitwan National Park",
    "National Park entrance and park fees",
  ];

  const excluded = [
    "International flight tickets and airport departure taxes",
    "Beverages: Any extra drinks, including bottled or boiled water, personal drinks and meals",
    "Additional costs incurred due to causes beyond our control (weather, landslides, illness, strikes, etc.)",
    "Tips and gratuities for staff and drivers",
    "Personal clothing and gear",
    "Any expenses not specifically included in the package",
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
                alt="Bird Watching Tour Nepal"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4 text-white">
              <h1 className="fw-bold">{trekInfo.name}</h1>
              <p className="lead">
                Discover Nepal's incredible avian diversity across pristine forests, wetlands, and national parks
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
                  Nepal is a birdwatcher's dream, home to some of the most diverse avian habitats on the planet. From the lush forests of Shivapuri Nagarjun National Park, just north of Kathmandu, to the sprawling wetlands and grasslands of Chitwan National Park in the Terai lowlands, the country offers unparalleled opportunities for bird enthusiasts.
                </p>
                <p className="card-text">
                  Chitwan, a UNESCO World Heritage Site, is particularly renowned for its rare and migratory bird species, including the endangered Bengal Florican and the majestic Great Hornbill. Meanwhile, Shivapuri Nagarjun's unique ecosystem provides critical habitat for high-altitude and forest-dwelling birds, making Nepal a must-visit destination for ornithologists and nature lovers alike.
                </p>
                <p className="card-text">
                  This itinerary ensures an unforgettable birdwatching adventure across Nepal's most rewarding avian hotspots.
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
                    <GiHummingbird
                      className="text-primary"
                      style={{ fontSize: "1.2rem" }}
                    />
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">Best Season</div>
                    <div className="fw-medium">{trekInfo.bestSeason}</div>
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
                    <div className="fw-medium">{trekInfo.difficulty}</div>
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
                      className="bi bi-currency-dollar text-primary"
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                  </div>
                  <div className="quick-fact-content">
                    <div className="text-muted small">Cost (10 pax)</div>
                    <div className="fw-medium">{trekInfo.cost}</div>
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
                          {trekInfo.difficulty}
                        </span>
                      </h4>
                    </div>
                    <p className="card-text">
                      This bird watching tour is rated as easy to moderate. It is suitable for bird enthusiasts of all fitness levels. The tour involves:
                    </p>
                    <ul>
                      <li>Comfortable vehicle transfers between locations</li>
                      <li>Easy to moderate walking on birding trails</li>
                      <li>Early morning starts for optimal bird sighting</li>
                      <li>Maximum altitude of 2,732m at Phulchowki Hill</li>
                    </ul>
                    <p className="card-text">
                      No prior trekking experience is required. The tour is designed for birdwatchers who want to maximize species sightings while enjoying comfortable accommodations.
                    </p>
                  </div>
                  <div className="col-md-4">
                    {/* Difficulty Image */}
                    <div className="ratio ratio-4x3 mt-3 mt-md-0">
                      <img
                        src={img1}
                        className="img-fluid rounded shadow-sm object-fit-cover"
                        alt="Bird watching in Nepal"
                      />
                    </div>
                    <p className="text-center small mt-2 text-muted">
                      Birding at Chitwan National Park
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
                  {trekInfo.highlights.map((highlight, index) => (
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
                              Lightweight, breathable shirts
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Long pants (earth tones preferred)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Light fleece or jacket
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Rain jacket/poncho
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Comfortable walking shoes
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Hiking socks (3-4 pairs)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Wide-brimmed hat
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Camouflage or neutral colors
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
                            <i className="bi bi-binoculars me-2 text-primary"></i>
                            Birding Gear
                          </h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Binoculars (8x42 or 10x42 recommended)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Spotting scope (optional)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Field guide to Nepal birds
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Notebook and pen for bird log
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Camera with telephoto lens
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Extra camera batteries
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Memory cards (plenty of storage)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Daypack for daily excursions
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
                              Insect repellent (essential)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunscreen and lip balm
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Prescription medications
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              First aid kit
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Water bottle (reusable)
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Sunglasses
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Headlamp/flashlight
                            </li>
                            <li className="list-group-item border-0 py-1 bg-transparent">
                              Power bank for devices
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

export default BirdWatching;
