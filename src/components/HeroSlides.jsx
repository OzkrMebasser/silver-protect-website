import React, { useState } from 'react';
import ParticlesHero from "./Particles";
import "../index.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const HeroSlides = () => {
    const slides = [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero1.png?alt=media&token=b64afe08-4a19-4959-944c-190310399e4c',
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/cicatrizantePoderoso.png?alt=media&token=a1aadd98-688f-480b-8798-37c8319e1b72',
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero2.png?alt=media&token=1bd552b0-9bf9-42a6-bcd9-de6fbc0d862e',
      },
  
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero4.png?alt=media&token=099fc626-9b6a-499a-8f2c-1a3ac15022f7',
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero3.png?alt=media&token=b5099fa9-a52c-4b92-bda9-6bd7d8d06965',
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero5.png?alt=media&token=48709d5c-bc6f-4db3-9f78-7029c59f9d72',
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/pruebaHero.png?alt=media&token=5409c0ae-5966-4a77-9a5c-746590d388d7',
      }
    ];
  
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
      <div className='max-w-[1400px] h-[100vh] w-full m-auto py-16 px-4  relative group  heroBGC	'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})`, }}
          className='w-full h-full bg-center bg-cover bg-no-repeat sm:bg-contain   duration-500 '
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

export default HeroSlides