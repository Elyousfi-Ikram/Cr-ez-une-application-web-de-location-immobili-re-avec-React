import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Router from "./component/Router"; 

import Header from "./component/Header/header"; 
import Footer from "./component/Footer/footer"; 

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
