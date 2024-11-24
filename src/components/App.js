import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Banner from "./Banner";
import Accueil from "./Accueil";
import About from "./About";
import Footer from './Footer'

import logo from '../assets/logo.png'


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
      </Routes>
      <Footer />

    </Router>
  )
}

export default App;