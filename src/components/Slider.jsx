import React, { Fragment } from "react";
import HeroSlider, {  Slide } from "hero-slider";
import ParticlesHero from "./Particles";
// import Wrapper from "../components/Hero/Title";
// import Title from "../components/Hero/Wrapper";
// import Subtitle from "./components/Subtitle";

const silverPlateImg1 = "https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/SilverProtectHero.png?alt=media&token=acd8128c-e6ed-42ca-9266-4787c20b8896";
const silverPlateImg2 = "";
const silverPlateImg3 = "";
const silverPlateImg4 = "";
const silverPlateImg5 = "";
export default function BasicSlider() {
  return (
    <div className=" heroBGC max-w-full h-auto ">
      <HeroSlider
        height={"100vh"}
        className="heroBGC max-w-full h-auto center"
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 300,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
 

        <Slide
          // shouldRenderMask
          // label="Giau Pass - Italy"
          background={{
            backgroundImage: silverPlateImg1,
          }}
        />

        <Slide
          // shouldRenderMask
          // label="Bogliasco - Italy"
          background={{
            backgroundImage: silverPlateImg2,
          }}
        />

        <Slide
          // shouldRenderMask
          // label="County Clare - Ireland"
          background={{
            backgroundImage: silverPlateImg3,
          }}
        />

        <Slide
          // shouldRenderMask
          // label="Crater Rock, OR - United States"
          background={{
            backgroundImage: silverPlateImg4,
          }}
        />
        <Slide
          // shouldRenderMask
          // label="Crater Rock, OR - United States"
          background={{
            backgroundImage: silverPlateImg5,
          }}
        />

        {/* <MenuNav /> */}
        <ParticlesHero />

        <div className="listaPlateada z-300"></div>
      </HeroSlider>
    </div>
  );
}
