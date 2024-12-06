import React from "react";
import Gallery from '../../component/Gallery/gallery'
import Banner from '../../component/Banner/banner.js';

function Accueil() {
  return (
    <div>
      <Banner type="banner-accueil" />
      <Gallery />
    </div>
  );
}

export default Accueil;