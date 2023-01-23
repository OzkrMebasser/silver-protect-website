import React from "react";




// Components
import Navbar from "./components/Navbar";
import FloatContact from "./components/FloatContact";
import About from "./components/About";
import FuncDesc from "./components/FuncDesc";
import Cards from "./components/Cards";
import HeroSlides from "./components/HeroSlides";
import Footer from "./components/Footer";



function App() {

    return (
    <div>
       <Navbar/> 
       <HeroSlides/> 
       <FloatContact/> 
       <About/> 
       <FuncDesc/> 
       <Cards/> 
       <Footer/> 
    </div>
        
    )

}

export default App;
