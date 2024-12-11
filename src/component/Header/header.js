import React from "react";
import { Link } from "react-router-dom";

import './header.scss';

import logo from '../../Assets/logo.png';

function Header() {
    return (
        <div className="Header">
            <div className='Header-content'>
                <img src={logo} alt='logo' className='logo-kasa' />
                <div className='Header-link'>
                    <Link to="/" className='Header-accueil'>Accueil</Link>
                    <Link to="/about" className='Header-propos'>A Propos</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;