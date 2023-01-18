import React, { Fragment } from "react";
import About from "./components/About";
import Cards from "./components/Cards";
import FloatContact from "./components/FloatContact";
import Footer from "./components/Footer";
import HeroSlides from "./components/HeroSlides";
import Navbar from "./components/Navbar";
import FuncDesc from "./components/FuncDesc";

function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
        <HeroSlides />
        <About />
        <FuncDesc />
        <Cards />
        <Footer />
      </div>
      <FloatContact />
    </Fragment>
  );
}

export default App;
