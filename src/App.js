import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./component/router";
import Header from './component/header/header';
import Footer from './component/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
