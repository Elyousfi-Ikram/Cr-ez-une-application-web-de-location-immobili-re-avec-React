import { Route, Routes, Navigate } from "react-router-dom"; 
import Accueil from "../Page/Accueil/accueil";
import About from '../Page/About/about';
import Logement from '../Page/Logement/logement';
import Erreur from "../Page/Erreur/erreur";

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
