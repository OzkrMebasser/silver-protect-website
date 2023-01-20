import React, { Fragment } from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements, 
  Route,
  Outlet,
  RouterProvider,
  Link
} from "react-router-dom";

// Components
import About from "./components/About";
import Cards from "./components/Cards";
import FloatContact from "./components/FloatContact";
import Footer from "./components/Footer";
import HeroSlides from "./components/HeroSlides";
import Navbar from "./components/Navbar";
import FuncDesc from "./components/FuncDesc";




function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index path="/" element={<Navbar/>}/>
      <Route path="/inicio" element={<HeroSlides/>}/>
      <Route path="/quienes-somos" element={<About/>}/>
      <Route path="/como-funciona" element={<FuncDesc/>}/>
      <Route path="/proteccion-antiseptica" element={<Cards/>}/>
      <Route path="/pie-de-pagina" element={<Footer/>}/>
      <Route path="/contacto" element={<FloatContact/>}/>
    </Route>
    
  )
)


  return (
    // <Fragment>

    //   
    // </Fragment>

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
return(
  <>
    <div>
      <Link to="/"><Navbar /></Link>
      <Link to="/inicio"> <HeroSlides/></Link>
      <Link to="/quienes-somos"><About /></Link>
      <Link to="/contacto"><FloatContact /></Link>
    </div>

    <div>
        <Navbar />
        {/* <HeroSlides /> */}
        {/* <About /> */}
        <FuncDesc />
        <Cards />
        <Footer />
      </div>
    <div>
      <Outlet/>
      <FloatContact />
    </div>
  </>
)
};
export default App;
