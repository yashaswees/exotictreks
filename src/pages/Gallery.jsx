import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Gallery() {
  const { t } = useTranslation();

  const galleryImages = [
    { src: "gallery1.jpg", width: 12 },
    { src: "gallery2.jpg", width: 6 },
    { src: "gallery3.jpg", width: 6 },
    { src: "gallery4.jpg", width: 12 },
    { src: "gallery5.jpg", width: 6 },
    { src: "gallery6.jpg", width: 6 },
    { src: "gallery7.jpg", width: 12 },
    { src: "gallery8.jpg", width: 6 },
    { src: "gallery9.jpg", width: 6 },
    { src: "gallery10.jpg", width: 12 },
    { src: "gallery11.jpeg", width: 6 },
    { src: "gallery12.jpeg", width: 6 },
    { src: "gallery13.jpeg", width: 12 },
    { src: "gallery14.jpeg", width: 6 },
    { src: "gallery15.jpeg", width: 6 },
    { src: "gallery17.jpeg", width: 6 },
    { src: "gallery18.jpeg", width: 6 },
    { src: "gallery19.jpeg", width: 12 },
    { src: "gallery20.jpeg", width: 6 },
    { src: "gallery21.jpeg", width: 6 },
    { src: "gallery22.jpeg", width: 12 },
    { src: "gallery23.jpeg", width: 6 },
    { src: "gallery24.jpeg", width: 6 },
    { src: "gallery25.jpeg", width: 12 },
  ];

  return (
    <>
      <Navbar />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">{t("gallery.title")}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="text-muted">{t("gallery.subtitle")}</p>
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
                    alt={`${t("gallery.imageAlt")} ${idx + 1}`}
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
