import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Router from "./component/Router"; 

import Banner from "./component/Banner/banner"; 
import Footer from "./component/Footer/footer"; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Banner />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
