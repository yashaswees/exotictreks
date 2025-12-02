import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ABC from "./pages/plans/ABC";
import ABC_Circuit from "./pages/plans/ABC_Circuit";
import RValley from "./pages/plans/RValley";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";

// Activities
import MountainFlight from "./pages/plans/MountainFlight";
import Safari from "./pages/plans/Safari";
import Sightseeing from "./pages/plans/Sightseeing";
import PeakClimbing from "./pages/plans/PeakClimbing";
import PilgrimageTour from "./pages/plans/PilgrimageTour";
import Expeditions from "./pages/plans/Expeditions";
import BirdWatching from "./pages/plans/BirdWatching";
import VisitNepal from "./pages/plans/VisitNepal";
import VisitIndia from "./pages/plans/VisitIndia";
import VisitTibet from "./pages/plans/VisitTibet";

// Treks
import LarkeLaPass from "./pages/plans/LarkeLaPass";
import ManasluCircuit from "./pages/plans/ManasluCircuit";
import MustangTrek from "./pages/plans/MustangTrek";
import DhaulagiriTrek from "./pages/plans/DhaulagiriTrek";

// Everest Treks
import EverestClassicTrek from "./pages/plans/EverestClassicTrek";
import EverestBaseCamp from "./pages/plans/EverestBaseCamp";
import EverestFoothillTrek from "./pages/plans/EverestFoothillTrek";
import EverestKalapattharTrek from "./pages/plans/EverestKalapattharTrek";
import EverestTengbocheTrek from "./pages/plans/EverestTengbocheTrek";
import ImjaTseTrek from "./pages/plans/ImjaTseTrek";

// Langtang Treks
import LangtangGanjala from "./pages/plans/LangtangGanjala";
import LangtangGosaikunda from "./pages/plans/LangtangGosaikunda";
import LangtangValleyTrek from "./pages/plans/LangtangValleyTrek";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
        <Route exact path="/about-us" element={<About />}></Route>
        
        {/* Activities */}
        <Route exact path="/plans/mountain-flight" element={<MountainFlight />}></Route>
        <Route exact path="/plans/safari" element={<Safari />}></Route>
        <Route exact path="/plans/sightseeing" element={<Sightseeing />}></Route>
        <Route exact path="/plans/peak-climbing" element={<PeakClimbing />}></Route>
        <Route exact path="/plans/pilgrimage-tour" element={<PilgrimageTour />}></Route>
        <Route exact path="/plans/expeditions" element={<Expeditions />}></Route>
        <Route exact path="/plans/bird-watching" element={<BirdWatching />}></Route>
        <Route exact path="/plans/visit-nepal" element={<VisitNepal />}></Route>
        <Route exact path="/plans/visit-india" element={<VisitIndia />}></Route>
        <Route exact path="/plans/visit-tibet" element={<VisitTibet />}></Route>
        
        {/* Annapurna Treks */}
        <Route exact path="/plans/annapurna-base-camp-trek" element={<ABC />}></Route>
        <Route exact path="/plans/annapurna-circuit" element={<ABC_Circuit />}></Route>
        
        {/* Other Treks */}
        <Route exact path="/plans/larke-la-pass" element={<LarkeLaPass />}></Route>
        <Route exact path="/plans/manaslu-circuit" element={<ManasluCircuit />}></Route>
        <Route exact path="/plans/ruby-valley-trek" element={<RValley />}></Route>
        <Route exact path="/plans/mustang-trek" element={<MustangTrek />}></Route>
        <Route exact path="/plans/dhaulagiri-trek" element={<DhaulagiriTrek />}></Route>
        
        {/* Everest Treks */}
        <Route exact path="/plans/everest-classic-trek" element={<EverestClassicTrek />}></Route>
        <Route exact path="/plans/everest-base-camp" element={<EverestBaseCamp />}></Route>
        <Route exact path="/plans/everest-foothill-trek" element={<EverestFoothillTrek />}></Route>
        <Route exact path="/plans/everest-kalapathar-trek" element={<EverestKalapattharTrek />}></Route>
        <Route exact path="/plans/everest-tengboche-trek" element={<EverestTengbocheTrek />}></Route>
        <Route exact path="/plans/imja-tse-trek" element={<ImjaTseTrek />}></Route>
        
        {/* Langtang Treks */}
        <Route exact path="/plans/langtang-ganjala" element={<LangtangGanjala />}></Route>
        <Route exact path="/plans/langtang-gosaikunda" element={<LangtangGosaikunda />}></Route>
        <Route exact path="/plans/langtang-valley-trek" element={<LangtangValleyTrek />}></Route>
        
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
