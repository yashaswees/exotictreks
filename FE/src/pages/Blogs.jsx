import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const blogs = [
  {
    title: "Le Tour des Annapurnas",
    slug: "https://www.decouvrir-montfarville.fr/fenetre_voyage_nepal_octobre2024.htm",
    source:
      "https://www.decouvrir-montfarville.fr/fenetre_voyage_nepal_octobre2024.htm",
    excerptKey: "blogs.annapurna.excerpt",
    image:
      "https://www.decouvrir-montfarville.fr/tour%20des%20annapurnas/trek-annapurna-cartebis.jpg",
  },
  {
    title: "Trek Pikey Peak – Octobre 2022",
    slug: "https://www.decouvrir-montfarville.fr/fenetre_voyage_nepal_octobre2022.htm",
    source:
      "https://www.decouvrir-montfarville.fr/fenetre_voyage_nepal_octobre2022.htm/",
    excerptKey: "blogs.pikey.excerpt",
    image:
      "https://www.decouvrir-montfarville.fr/trekpikey-peak2022/mercredi%202/14.jpg",
  },
  {
    title: "Trek Manaslu – Octobre 2023",
    slug: "https://www.decouvrir-montfarville.fr/fenetre_nepal_manasluoctobre2023.htm",
    source: "https://www.decouvrir-montfarville.fr/trekmanaslu2023/",
    excerptKey: "blogs.manaslu.excerpt",
    image:
      "https://www.decouvrir-montfarville.fr/images/masnaslu%202023/map-terres-du-nepal-01.jpg",
  },
];

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-4">{t("blogs.title")}</h2>
          <div className="title-underline mx-auto mb-5"></div>
          <div className="row gy-4">
            {blogs.map((blog, index) => (
              <div className="col-12" key={index}>
                <NavLink
                  to={blog.slug}
                  className="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="shadow-sm border-0 rounded-4 overflow-hidden blog-card h-100 transition">
                    <div className="row g-0 h-100">
                      <div className="col-md-4">
                        <Card.Img
                          src={blog.image}
                          alt={blog.title}
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <Card.Body className="p-4 d-flex flex-column justify-content-center h-100">
                          <Card.Title className="fw-bold mb-2">
                            {blog.title}
                          </Card.Title>
                          <Card.Text className="text-muted mb-0">
                            {t(blog.excerptKey)}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .blog-card {
          transition: transform 0.4s ease, box-shadow 0.3s ease;
        }
        .blog-card:hover {
          transform: scale(1.01);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
};

export default Blogs;
