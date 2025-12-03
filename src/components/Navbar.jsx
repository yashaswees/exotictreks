import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-primary d-flex align-items-center">
          <img 
            src="/images/logo.png" 
            alt="Exotic Treks & Expeditions Logo" 
            style={{ height: "40px", marginRight: "10px" }}
          />
          Exotic Treks & Expeditions
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link text-dark fw-medium dropdown-toggle"
                href="#itinerary"
                id="itineraryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.itinerary")}
              </a>
              <div
                className="dropdown-menu w-50 dropdown-menu-end py-3 shadow border-0"
                aria-labelledby="itineraryDropdown"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <h6 className="dropdown-header fw-bold">
                        {t("navbar.activities")}
                      </h6>
                      <NavLink to="/plans/mountain-flight" className="dropdown-item py-2">
                        {t("navbar.mountainFlight")}
                      </NavLink>
                      <NavLink to="/plans/safari" className="dropdown-item py-2">
                        {t("navbar.safari")}
                      </NavLink>
                      <NavLink to="/plans/sightseeing" className="dropdown-item py-2">
                        {t("navbar.sightseeing")}
                      </NavLink>
                      <NavLink to="/plans/peak-climbing" className="dropdown-item py-2">
                        Peak Climbing
                      </NavLink>
                      <NavLink to="/plans/pilgrimage-tour" className="dropdown-item py-2">
                        Pilgrimage Tour
                      </NavLink>
                      <NavLink to="/plans/expeditions" className="dropdown-item py-2">
                        Expeditions
                      </NavLink>
                      <NavLink to="/plans/rafting" className="dropdown-item py-2">
                        Rafting
                      </NavLink>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                      <h6 className="dropdown-header fw-bold">
                        {t("navbar.treks")}
                      </h6>
                      <div className="dropdown dropend annapurna-dropdown">
                        <a
                          className="dropdown-item py-2 dropdown-toggle"
                          href="#annapurna-trek"
                          role="button"
                          aria-expanded="false"
                        >
                          Annapurna Trek
                        </a>
                        <ul className="dropdown-menu shadow border-0">
                          <li>
                            <NavLink to="/plans/annapurna-base-camp-trek" className="dropdown-item py-2">
                              Annapurna Base Camp
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/annapurna-circuit" className="dropdown-item py-2">
                              Annapurna Circuit
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <NavLink to="/plans/larke-la-pass" className="dropdown-item py-2">
                        Larke la Pass
                      </NavLink>
                      <div className="dropdown dropend everest-dropdown">
                        <a
                          className="dropdown-item py-2 dropdown-toggle"
                          href="#everest-base-camp"
                          role="button"
                          aria-expanded="false"
                        >
                          Everest Trek
                        </a>
                        <ul className="dropdown-menu shadow border-0">
                          <li>
                            <NavLink to="/plans/everest-classic-trek" className="dropdown-item py-2">
                              Everest Classic Trek
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/everest-base-camp" className="dropdown-item py-2">
                              Everest Base Camp
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/everest-foothill-trek" className="dropdown-item py-2">
                              Everest Foothill Trek
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/everest-kalapathar-trek" className="dropdown-item py-2">
                              Everest Kalapathar Trek
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/everest-tengboche-trek" className="dropdown-item py-2">
                              Everest Tengboche Trek
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/imja-tse-trek" className="dropdown-item py-2">
                              Imja Tse Trek
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <NavLink to="/plans/manaslu-circuit" className="dropdown-item py-2">
                        Manaslu Circuit
                      </NavLink>
                      <div className="dropdown dropend langtang-dropdown">
                        <a
                          className="dropdown-item py-2 dropdown-toggle"
                          href="#langtang-valley-tek"
                          role="button"
                          aria-expanded="false"
                        >
                          Langtang Trek
                        </a>
                        <ul className="dropdown-menu shadow border-0">
                          <li>
                            <NavLink to="/plans/langtang-ganjala" className="dropdown-item py-2">
                              Langtang Valley: Ganjala
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/langtang-gosaikunda" className="dropdown-item py-2">
                              Langtang Valley: Gosaikunda
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/plans/langtang-valley-trek" className="dropdown-item py-2">
                              Langtang Valley Trek
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <NavLink
                        to="/plans/ruby-valley-trek"
                        className="dropdown-item py-2"
                      >
                        Ruby Valley Trek
                      </NavLink>
                      <NavLink to="/plans/mustang-trek" className="dropdown-item py-2">
                        Mustang Trek
                      </NavLink>
                      <NavLink to="/plans/dhaulagiri-trek" className="dropdown-item py-2">
                        Dhaulagiri Trek
                      </NavLink>
                    </div>

                    <div className="col-md-4">
                      <h6 className="dropdown-header fw-bold">
                        {t("navbar.popularPackages")}
                      </h6>
                      <a className="dropdown-item py-2" href="#7-day-annapurna">
                        {t("navbar.annapurna7Day")}
                      </a>
                      <a className="dropdown-item py-2" href="#10-day-everest">
                        {t("navbar.everest10Day")}
                      </a>
                      <a className="dropdown-item py-2" href="#wildlife-safari">
                        {t("navbar.wildlifeSafari")}
                      </a>
                      <NavLink to="/plans/bird-watching" className="dropdown-item py-2">
                        Bird Watching
                      </NavLink>
                      <NavLink to="/plans/visit-nepal" className="dropdown-item py-2">
                        Visit Nepal
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link text-dark fw-medium">
                {t("navbar.gallery")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link text-dark fw-medium">
                {t("navbar.blogs")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link text-dark fw-medium">
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link text-dark fw-medium"
              >
                {t("navbar.contact")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact-us" className="btn btn-primary px-3 py-1">
                {t("navbar.bookNow")}
              </NavLink>
            </li>

            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>

      {/* CSS for hover dropdown */}
      <style>{`
        .everest-dropdown:hover > .dropdown-menu,
        .langtang-dropdown:hover > .dropdown-menu,
        .annapurna-dropdown:hover > .dropdown-menu {
          display: block;
          margin-top: 0;
        }
        .everest-dropdown > .dropdown-menu,
        .langtang-dropdown > .dropdown-menu,
        .annapurna-dropdown > .dropdown-menu {
          display: none;
          position: absolute;
          left: 100%;
          top: 0;
        }
        .everest-dropdown,
        .langtang-dropdown,
        .annapurna-dropdown {
          position: relative;
        }
        .everest-dropdown > .dropdown-toggle::after,
        .langtang-dropdown > .dropdown-toggle::after,
        .annapurna-dropdown > .dropdown-toggle::after {
          margin-left: 0.5em;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
