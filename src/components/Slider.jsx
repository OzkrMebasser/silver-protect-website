import React,{Fragment} from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import ParticlesHero from "./Particles";
import Wrapper from "../components/Hero/Title";
// import Title from "../components/Hero/Wrapper";
// import Subtitle from "./components/Subtitle";

const bogliasco = "https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/SilverProtectHero.png?alt=media&token=acd8128c-e6ed-42ca-9266-4787c20b8896";
const countyClare = "https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/SilverProtectHero3.png?alt=media&token=1c296752-e75f-465b-80d1-436db4ccf4ee";
const craterRock = "https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/SilverProtectHero2.png?alt=media&token=25194cba-bbc9-430c-a14f-9c2a0ee9a8c1";
const giauPass = "https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/ionesdeplata2.png?alt=media&token=540b6861-15d5-4330-89bb-12a5d49c609e";

export default function BasicSlider() {
  return (
    <div className=" heroBGC object-none object-center 	">
    <HeroSlider
      height={"100vh"}
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
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          {/* <Title>Basic Setup</Title> */}
          {/* <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle> */}
   
        </Wrapper>
      </Overlay>

      <Slide
        // shouldRenderMask
        // label="Giau Pass - Italy"
        background={{
          backgroundImage: giauPass
          
        }}
     
      />

      <Slide
        // shouldRenderMask
        // label="Bogliasco - Italy"
        background={{
          backgroundImage: bogliasco
        }}
        style={{marginBottom:"100px"
    }}
      />

      <Slide
        // shouldRenderMask
        // label="County Clare - Ireland"
        background={{
          backgroundImage: countyClare

        }}
        style={{marginTop:"-300px"
    }}

       
      />

      <Slide
        // shouldRenderMask
        // label="Crater Rock, OR - United States"
        background={{
          backgroundImage: craterRock
        }}
        style={{marginBottom:"100px"
    }}
      />

      {/* <MenuNav /> */}
      <ParticlesHero />
    
        <div className="listaPlateada z-300"></div>
   
    </HeroSlider>
    
    </div>
  );
}