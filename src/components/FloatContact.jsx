import React,{useState} from 'react'
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import {AiOutlineComment} from "react-icons/ai";

import { GoX } from "react-icons/go";




import '../FloatContact.css'

const FloatContact = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (

 <div >
      <button className="actionButton floatingBtn z[200] blinking-moon" onClick={toggleMenu}>
        
         {!openMenu ? <AiOutlineComment />: <GoX/>}
        </button>
     
      {openMenu ? (
        <div className='whatsApp' >
         <a href="https://wa.me/5214626932535?text=Hola%20me%20interesa%20saber%20mas%20acerca%20de%20Silver%20Protect"  target="_blank" rel="nofollow noopener noreferrer"><BsWhatsapp/></a> 
          </div>
      ) : null}
          {openMenu ? (
        <div className='messenger'>
         <a href="https://www.facebook.com/876531472464645"  target="_blank" rel="nofollow noopener noreferrer" ><BsMessenger/></a> 
          </div>
      ) : null}
       {openMenu ? (
        <div className='email'>
         <a href='mailto:silverprotect@hotmail.com'><MdOutlineMailOutline/></a> 
          </div>
      ) : null}
    </div>
    

  )
}

export default FloatContact;