import React, { useState } from 'react';
import ParticlesHero from "./Particles";
import "../index.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from "../assets/images";



const HeroSlides = () => {
    // const slides = [
      
    //   {
    //     url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs1.png?alt=media&token=91e9a63c-dea5-4ae2-aee7-714dc8df5525'
    //   },
    //   {
    //     url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs2.png?alt=media&token=54ee3b9d-0412-4431-bbd1-2c9e91f75f1e'
    //   },
    //   {
    //     url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs3.png?alt=media&token=70d096ac-bc12-4e53-b182-98d40e909aff'
    //   },
    //   {
    //     url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs4.png?alt=media&token=f3f3fb27-0094-45d8-88a7-7c3cf1ad1c5e'
    //   },
    //   {
    //     url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs5.png?alt=media&token=9e4bedcf-db81-4e2c-9656-268b3ef84c9a'
    //   },
    //   {
    //     url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs6.png?alt=media&token=02bd629a-f5da-41fb-b560-ebd4ebc9fc1a'
    //   }


    // ];

    
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

export default HeroSlides