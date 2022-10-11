import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


 
const Navbar = () => {
  //States
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState(true);

  //Fuctions
  
  
  const handleNav = () => { // handles responsive Menu navigation
    setNav(!nav);
  };

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavbarBg(true);
    }
    else if (window.scrollY < 400){
      setNavbarBg(false);
    }
  };

    window.addEventListener('scroll', changeNavBg);

  

  return (
    <div className={navbarBg ? "flex justify-between items-center h-24 w-full px-16 text-white bg-[#0c234c] shadow-xl fixed top-0 z-50" : "flex justify-between items-center h-24 w-full px-16 text-white bg-[transparent] fixed top-0 z-50"}>
    {/* <div className='flex justify-between items-center h-24 w-screen  mx-auto px-20 text-white bg-[#0E115D] fixed top-0'> */}
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <span><img className="h-8 w-34" src='https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c' alt="silver protect" /></span>
      <ul className='hidden md:flex'>
       
        <li className='link link-underline link-underline-white p-4 font-bold'>Inicio</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>Acerca de</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>Distribuidores</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>Contactanos</li>


      </ul>
      <div onClick={handleNav} className='block md:hidden z-50'>
          {nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28} />}
      </div>
      <ul className={nav ? 'mx-auto fixed left-0 top-0 w-[100%] h-full  bg-[#0c234c] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      
          <li><img className=" text-center mx-auto py-12 h-22 w-32" src='https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c' alt="silver protect" /></li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>Incio</li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>Acerca de</li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>Distribuidores</li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>Contactanos</li>
      </ul>
    </div>
  );
};

export default Navbar;
