import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-primary" href="#">
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
            {/* Itinerary with Dropdown */}
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link text-dark fw-medium dropdown-toggle"
                href="#itinerary"
                id="itineraryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Itinerary
              </a>
              <div
                className="dropdown-menu w-50 dropdown-menu-end py-3 shadow border-0"
                aria-labelledby="itineraryDropdown"
              >
                <div className="container">
                  <div className="row">
                    {/* Activities Column */}
                    <div className="col-md-4 mb-3 mb-md-0">
                      <h6 className="dropdown-header fw-bold">Activities</h6>
                      <a className="dropdown-item py-2" href="#mountain-flight">
                        Mountain Flight
                      </a>
                      <a className="dropdown-item py-2" href="#safari">
                        Safari
                      </a>
                      <a className="dropdown-item py-2" href="#sightseeing">
                        Sightseeing
                      </a>
                    </div>

                    {/* Treks Column */}
                    <div className="col-md-4 mb-3 mb-md-0">
                      <h6 className="dropdown-header fw-bold">Treks</h6>
                      <NavLink
                        to="/plans/annapurna-base-camp-trek"
                        className="dropdown-item py-2"
                        href="#annapurna-base-camp"
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

                    {/* Popular Packages Column */}
                    <div className="col-md-4">
                      <h6 className="dropdown-header fw-bold">
                        Popular Packages
                      </h6>
                      <a className="dropdown-item py-2" href="#7-day-annapurna">
                        7-Day Annapurna Trek
                      </a>
                      <a className="dropdown-item py-2" href="#10-day-everest">
                        10-Day Everest Adventure
                      </a>
                      <a className="dropdown-item py-2" href="#wildlife-safari">
                        Wildlife Safari Package
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link text-dark fw-medium">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link text-dark fw-medium">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link text-dark fw-medium">
                About us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link text-dark fw-medium"
              >
                Contact us
              </NavLink>
            </li>

            {/* Call to action button */}
            <li className="nav-item">
              <NavLink to="/contact-us" className="btn btn-primary px-3 py-1">
                Book Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
