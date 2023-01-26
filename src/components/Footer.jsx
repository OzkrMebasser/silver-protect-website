import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr";
import {
  BsFillTelephoneForwardFill,
  BsWhatsapp,
  BsMessenger,
} from "react-icons/bs";

const Footer = ({ closeMenu }) => {
  return (
    <Fragment>
      <footer
        class="relative bg-blueGray-200 pt-8 pb-6 bg-[#0c234c] text-[white]"
        id="contacto"
      >
        <div class="mx-auto px-4 ">
          <div class="flex flex-wrap ">
            <div class="text-center w-full lg:w-6/12 px-4 mx-auto">
              <h4 class="text-[1.8rem] ">Siguenos en</h4>
              <div className="iconosFooter mt-4 mb-8">
                <span>
                  <FaFacebookSquare />
                </span>
                <span>
                  <GrInstagram />
                </span>
                <span>
                  <GrYoutube />
                </span>
                <span>
                  <GrTwitter />
                </span>
                    
             
              </div>
              <div className="mt-[1.8rem] mb-[1.8rem] text-[1.5rem] ">
                    <span  >
                        Creado y distribuido por
                        <img
                        className="h-[6rem] w-[8rem] mt-[1rem]  mx-auto"
                          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fgpohidrodise%C3%B1o.png?alt=media&token=e5375228-e722-4cd3-bdb3-528435e57852"
                          alt="Grupo Hidrodiseño"
                        />
                      </span>
                    </div>
            </div>
            <div class="w-full lg:w-6/12 text-[1.6rem]">
              <div class="flex flex-wrap items-top text-left ">
                <div class="w-full lg:w-6/12 px-4 text-center mt-[1.5rem]">
                  <span class="uppercase ">Contactanos</span>
                  <ul class="list-unstyled mt-[1rem] " >
                    <li>
                      <a
                        className=" link-underline-footer "
                        href="tel:+529841681509"
                      >
                        Telefono{" "}
                        <BsFillTelephoneForwardFill className="inline text-[1.3rem] ml-[5px]" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-underline-footer"
                        href="https://wa.me/5214626932535?text=Hola%20me%20interesa%20saber%20mas%20acerca%20de%20Silver%20Protect"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        WhatsApp{" "}
                        <BsWhatsapp className="inline text-[1.3rem] ml-[5px]" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-underline-footer"
                        href="https://www.facebook.com/876531472464645"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Messenger{" "}
                        <BsMessenger className="inline text-[1.3rem] ml-[5px]" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-underline-footer"
                        href="mailto:silverprotect@hotmail.com"
                      >
                        Correo
                        <MdOutlineMailOutline className="inline text-[1.3rem] ml-[5px]" />
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="w-full lg:w-5/12  px-4 ">
                  <ul className="list-unstyled">
                    <li className="text-[1.2rem]  text-center">
                      Producto 100%               
                        <img
                          className="h-[8rem] w-[8rem] mt-[1rem] mx-auto "
                          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fhechoenmex.png?alt=media&token=fb3fad01-c714-4cab-a9b6-9e7da86a4402"
                          alt="Hecho en Mexico"
                        />
                     
                     
                    </li>
                    <li className="mt-[1rem] text-center text-[1.2rem]  text-center">
                      Comprar en 
                      <a
                        href="https://www.mercadolibre.com.mx/perfil/SILVER+PROTECT"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-8 w-22 bg-[#fff] text-[white] rounded-md p-1  mx-auto "
                          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/mercado-libre-logo.svg?alt=media&token=2336992a-6742-4f1f-85b1-a8a07611fa1e"
                          alt="Mercado libre"
                        />
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className=""
                        href=""
                      >
                        Terminos &amp; Condiciones
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 "></hr>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className=" text-[1.2rem] py-1">
                Copyright © <span id="get-current-year">2022</span>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                  className={"cursor-pointer	"}
                  target="_blank"
                >
                  {" "}
                  SILVER PROTECTION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
