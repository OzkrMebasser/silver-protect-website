import React from 'react';
import Typed from 'react-typed';
import Wrapper from '../components/Hero/Title';
import Title from '../components/Hero/Wrapper';
import Contact from './Contact';

import HeroSlider, { Overlay, Slide } from "hero-slider";
import { images } from '../assets/images';
import ParticlesHero from './Particles';
import '../index.css'

const Hero = () => {

  
  return (
    

    
    <div className='text-white heroBGC m-0'>

      <HeroSlider className=" "
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
      <Overlay >
        <Wrapper >
          <Title>
          <div className='max-w-[800px] mt-[0] h-screen mx-auto text-center flex flex-col justify-center'>
        
        {/* <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 '>
          Kairos Riviera Maya
        </h1> */}
        {/* <div className='flex justify-center items-center'>
          
          <Typed
          className='mt-6 md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 z-50'
            strings={['No irrita', 'No quema', 'No deja olores', 'No deja residuos']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
            {/* <Typed
          className='b mt-6 md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 z-50'
            strings={['No irrita', 'No quema', 'No deja olores', 'No deja residuos']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        {/* </div> */}
        {/* <button className='z-50 mt-20 bg-[white] text-[#0c2e51] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button> */}
        {
        images.map((image, index) => (
          <div className='m-0 place-items-center p-8'>
          <Slide 
         
        // shouldRenderMask   
        margin="auto"
        background={{
          backgroundImage: image.img,
       
          backgroundAttachment: "fixed",
          // marginBottom: "5rem"
            // height: "100%",
            // width: "100%",
            // marginBottom: "5rem",
            // padding: "5rem"
            
           
          // margin: "auto",
          // height: "rem"
        }}
        
      />
   </div>
      ))}
      
      </div>
          </Title>
      
        </Wrapper>
      </Overlay>


    

<ParticlesHero/>
<Contact/>
    </HeroSlider>
    
    </div>
  );
};

export default Hero;
