import React, { useState } from 'react';
import ParticlesHero from "./Particles";
import "../index.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from "../assets/images";


const HeroSlides = () => {

  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (    
      <div className='max-w-[1400px] h-[100vh] w-full m-auto py-12 px-4  relative heroBGC sm:object-scale-down	'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
          className='w-full mx-auto h-full bg-center bg-cover bg-no-repeat  duration-500 '
        ></div>
        {/* Left Arrow */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-[40px] cursor-pointer text-[silver]'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
        <ParticlesHero />
        
      </div>
      
    );
  }

export default HeroSlides;