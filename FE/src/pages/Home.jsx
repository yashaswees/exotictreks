import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <section className=" py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What Our Travelers Say</h2>
          <div className="row g-4">
            {[
              {
                name: "Didier SOMMIER",
                country: "France",
                feedback:
                  "Une agence au top ! Accueil formidable à l'arrivée à Katmandou. On se sent comme en famille quand le voyage est terminé et on se demande déjà quand on pourra revenir. Je recommande vivement :)",
              },
              {
                name: "André Decourt",
                country: "France",
                feedback:
                  "Une agence francophone au top qui se met en quatre pour satisfaire sa clientèle fidèle. Tout est organisé aux petits oignons. Merci à Pradip et toute son équipe !",
              },
              {
                name: "Sylvie Fouquet",
                country: "France",
                feedback:
                  "Des circuits préparés avec soin, des guides au top, s’assurant de votre confort. Première expérience pour moi, et sûrement pas la dernière.",
              },
            ].map((t, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100 rounded-4">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text fst-italic text-muted mb-4">
                      “{t.feedback}”
                    </p>
                    <div className="mt-auto">
                      <h6 className="fw-semibold mb-0">{t.name}</h6>
                      <small className="text-secondary">{t.country}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <About /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
