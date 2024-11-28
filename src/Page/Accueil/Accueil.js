import React from "react";
import Gallery from '../../component/Gallery/gallery'
import '../header.scss'

import imgHeaderAccueil from '../../Assets/img-header-accueil.png'

function Accueil() {
  return (
    <div>
      <div className='header-accueil'>
        <p className='accueil-text'>Chez vous, partout et ailleurs</p>
        <img src={imgHeaderAccueil} alt='' className='img-header' />
      </div>
      <Gallery />
    </div>
  );
}

export default Accueil;