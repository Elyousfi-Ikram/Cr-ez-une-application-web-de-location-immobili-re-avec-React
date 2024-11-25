import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Banner from "./Banner";
import Accueil from "./Accueil";
import About from "./About";
import Footer from './Footer';
import GalleryCard from './GalleryCard';

import logo from '../assets/logo.png'
import logements from '../datas/logements.json';


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
        <Route path="/gallery/:id" element={<GalleryCard logements={logements} />} />
      </Routes>
      
      <Footer />

    </Router>
  )
}

export default App;