import React from "react";
import { Link } from "react-router-dom";

import './banner.scss';

import logo from '../../Assets/logo.png'

function Banner() {
    return (
        <div className="banner">
            <div className='banner-content'>
                <img src={logo} alt='logo' className='logo-kasa' />
                <div className='banner-link'>
                    <Link to="/" className='banner-accueil'>Accueil</Link>
                    <Link to="/about" className='banner-propos'>A Propos</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;