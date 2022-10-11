import React, {Fragment} from 'react';

import { FaFacebookSquare} from 'react-icons/fa';
import {GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr"



const Footer = () => {
  return (
    <Fragment>
      <footer class="relative bg-blueGray-200 pt-8 pb-6 bg-[#0c234c] text-[white]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Siguenos en</h4>
     <div className='iconosFooter'>
<span><FaFacebookSquare /></span>
<span><GrInstagram /></span>
<span><GrYoutube/></span>
<span><GrTwitter/></span>

            

</div>  
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Información adiccional</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">¿Dudas?</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Legal</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Componentes</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Trabaja como distribuidor</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Otros recursos</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Quienes somos</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terminos &amp; Condiciones</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"></hr>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2022</span><a href="" class="text-blueGray-500 hover:text-gray-800" target="_blank"> SILVER PROTECTION</a>
         
        </div>
        
      </div>
    </div>
  </div>
</footer>
</Fragment>
  );
};

export default Footer;
