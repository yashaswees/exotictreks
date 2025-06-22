import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Gallery() {
  const galleryImages = [
    { src: "gallery1.jpg", width: 12 }, // full width
    { src: "gallery2.jpg", width: 6 },
    { src: "gallery3.jpg", width: 6 },
    { src: "gallery4.jpg", width: 12 },
    { src: "gallery5.jpg", width: 6 },
    { src: "gallery6.jpg", width: 6 },
    { src: "gallery7.jpg", width: 12 },
    { src: "gallery8.jpg", width: 6 },
    { src: "gallery9.jpg", width: 6 },
    { src: "gallery10.jpg", width: 12 },
  ];

  return (
    <>
      <Navbar />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Gallery</h2>
            <div className="title-underline mx-auto"></div>
            <p className="text-muted">Explore moments from our unforgettable journeys.</p>
          </div>

          <div className="row g-2">
            {galleryImages.map((img, idx) => (
              <div className={`col-12 col-md-${img.width}`} key={idx}>
                <div
                  className="rounded overflow-hidden shadow-sm"
                  style={{ height: "650px" }}
                >
                  <img
                    src={`/images/${img.src}`}
                    alt={`Gallery ${idx + 1}`}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
