import { Route, Routes, Navigate } from "react-router-dom"; 

import Accueil from '../page/accueil/accueil';
import About from '../page/about/about';
import Logement from '../page/logement/logement';
import Erreur from '../page/erreur/erreur';

import logements from '../datas/logements.json'; 

function Router () {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery/:id" element={<Logement logements={logements} />} />
      <Route path="*" element={<Erreur />} />
    </Routes>
  );
};

export default Router;
