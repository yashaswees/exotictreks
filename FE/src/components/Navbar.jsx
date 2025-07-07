import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-primary">
          Exotic Treks
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
                      <a className="dropdown-item py-2" href="#mountain-flight">
                        {t("navbar.mountainFlight")}
                      </a>
                      <a className="dropdown-item py-2" href="#safari">
                        {t("navbar.safari")}
                      </a>
                      <a className="dropdown-item py-2" href="#sightseeing">
                        {t("navbar.sightseeing")}
                      </a>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                      <h6 className="dropdown-header fw-bold">
                        {t("navbar.treks")}
                      </h6>
                      <NavLink
                        to="/plans/annapurna-base-camp-trek"
                        className="dropdown-item py-2"
                      >
                        Annapurna Base Camp
                      </NavLink>
                      <a
                        className="dropdown-item py-2"
                        href="#annapurna-circuit"
                      >
                        Annapurna Circuit
                      </a>
                      <a className="dropdown-item py-2" href="#larke-la-pass">
                        Larke la Pass
                      </a>
                      <a
                        className="dropdown-item py-2"
                        href="#everest-base-camp"
                      >
                        Everest Base Camp
                      </a>
                      <a className="dropdown-item py-2" href="#manaslu-circuit">
                        Manaslu Circuit
                      </a>
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
    </nav>
  );
};

export default Navbar;
