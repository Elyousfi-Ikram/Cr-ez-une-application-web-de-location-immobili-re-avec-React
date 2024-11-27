import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Banner from "./components/banner/banner.js";
import Accueil from "./pages/accueil/accueil.js";
import About from "./pages/about/about.js";
import Footer from './components/footer/footer.js';
import InfoLogement from "./pages/infoLogement/InfoLogement.js";

import Erreur from "./pages/erreur/erreur.js";

import logo from '../src/assets/logo.png'
import logements from '../src/datas/logements.json';

function App() {
  return (
    <Router>
      <Banner>
        <div className='banner'>
          <img src={logo} alt='logo' className='logo-kasa' />
          <div className='banner-link'>
            <Link to="/" className='banner-accueil'>Accueil</Link>
            <Link to="/about" className='banner-propos'>A Propos</Link>
          </div>
        </div>
      </Banner>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/:id" element={<InfoLogement logements={logements} />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      
      <Footer />

    </Router>
  )
}

export default App;