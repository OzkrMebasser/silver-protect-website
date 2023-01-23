import React, {Fragment} from 'react';

import { FaFacebookSquare} from 'react-icons/fa';
import {GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr"



const Footer = () => {
  return (
    <Fragment>
      <footer class="relative bg-blueGray-200 pt-8 pb-6 bg-[#0c234c] text-[white]" id='contacto'>
  <div class="mx-auto px-4 ">
    <div class="flex flex-wrap ">
      <div class="text-center w-full lg:w-6/12 px-4 mx-auto">
        <h4 class="text-3xl ">Siguenos en</h4>
     <div className='iconosFooter mt-4 mb-8'>
<span><FaFacebookSquare /></span>
<span><GrInstagram /></span>
<span><GrYoutube/></span>
<span><GrTwitter/></span>

            

</div>  
      </div>
      <div class="w-full lg:w-6/12 text-[1.6rem]">
        <div class="flex flex-wrap items-top text-left mb-6">
          <div class="w-full lg:w-/12 px-4 ml-auto">
            <span class="uppercase mb-2">Contactanos</span>
            <ul class="list-unstyled">
              <li>
                <a className="" href="">Telefono</a>
              </li>
              <li>
                <a className="" href="">WhatsApp</a>
              </li>
              <li>
                <a className="" href="">Messenger</a>
              </li>
              <li>
                <a className="" href="">Correo</a>
              </li>
              <li>
                {/* <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Mercado Libre</a> */}
                <a href='https://www.mercadolibre.com.mx/perfil/SILVER+PROTECT' className="" target="_blank" rel="noopener noreferrer"><img className="h-8 w-22 bg-[#fff] text-[white] rounded-md p-1 " src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/mercado-libre-logo.svg?alt=media&token=2336992a-6742-4f1f-85b1-a8a07611fa1e" alt='Mercado libre'/></a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Otros recursos</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Quienes somos</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terminos &amp; Condiciones</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"></hr>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className=" text-[1.2rem] py-1">
          Copyright © <span id="get-current-year">2022</span><a href="" class="text-blueGray-500 hover:text-gray-800" target="_blank"> SILVER PROTECTION</a>
         
        </div>
        
      </div>
    </div>
  </div>
</footer>
{/* <Contact/> */}
</Fragment>
  );
};

export default Footer;
