import React from "react";

import Gallery from '../../component/gallery/gallery';
import Banner from '../../component/banner/banner';

import './accueil.scss';

import img from '../../assets/img-banner-accueil.png';

function Accueil() {

  const title = 'Chez vous, partout et ailleurs';

  return (
    <main className="accueil">
      <Banner text={title} img={img} />
      <Gallery />
    </main>
  );
}

export default Accueil;