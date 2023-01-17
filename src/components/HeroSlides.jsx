import React, { useState } from 'react';
import ParticlesHero from "./Particles";
import "../index.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const HeroSlides = () => {
    const slides = [
      // {
      //   url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero1.png?alt=media&token=b64afe08-4a19-4959-944c-190310399e4c',
      // },
      // {
      //   url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/cicatrizantePoderoso.png?alt=media&token=a1aadd98-688f-480b-8798-37c8319e1b72',
      // },
      // {
      //   url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero2.png?alt=media&token=1bd552b0-9bf9-42a6-bcd9-de6fbc0d862e',
      // },
  
      // {
      //   url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero4.png?alt=media&token=099fc626-9b6a-499a-8f2c-1a3ac15022f7',
      // },
      // {
      //   url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero3.png?alt=media&token=b5099fa9-a52c-4b92-bda9-6bd7d8d06965',
      // },
      // {
      //   url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver-protect-img-hero5.png?alt=media&token=48709d5c-bc6f-4db3-9f78-7029c59f9d72',
      // },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs1.png?alt=media&token=91e9a63c-dea5-4ae2-aee7-714dc8df5525'
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs2.png?alt=media&token=54ee3b9d-0412-4431-bbd1-2c9e91f75f1e'
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs3.png?alt=media&token=70d096ac-bc12-4e53-b182-98d40e909aff'
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs4.png?alt=media&token=f3f3fb27-0094-45d8-88a7-7c3cf1ad1c5e'
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs5.png?alt=media&token=9e4bedcf-db81-4e2c-9656-268b3ef84c9a'
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fheroimgs6.png?alt=media&token=02bd629a-f5da-41fb-b560-ebd4ebc9fc1a'
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