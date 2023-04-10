import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import {GiClick} from "react-icons/gi"
import {
  BsFillTelephoneForwardFill,
  BsWhatsapp,
  BsMessenger,
} from "react-icons/bs";

const Footer = ({ closeMenu }) => {
  return (
    <Fragment>
      <footer
        className="relative pt-8 pb-6 bg-[#0c234c] text-[white] tracking-[.5px]"
        id="contacto"
      >
        <div class="mx-auto px-4 ">
          <div class="flex flex-wrap ">
            <div class="text-center w-full lg:w-6/12 px-4 mx-auto text-[1.6rem] ">
              <h4 class="text-[1.6rem] mb-[1.6rem] ">Siguenos en</h4>
              <div className="iconosFooter ">
                <span>
                <a
                    href="https://www.facebook.com/mxsilverprotect"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                  <FaFacebookSquare />
                  </a>
                </span>
                
                <span>
                  <a
                    href="https://www.instagram.com/silverprotectmx"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <GrInstagram />{" "}
                  </a>
                </span>
                <span>
                <a
                    href="https://twitter.com/SilverProtect_?t=HvtZAvz6OD_S_urUO07WVA&s=09"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <GrTwitter />
                  
                  </a>
                </span>
                {/* <span>
                <GrYoutube />
                </span> */}
              </div>
              <div className="mt-[1.8rem]  text-[1.5rem] ">
                <span>
                  Producto 100%
                  <img
                    className="h-[8rem] w-[8rem] mt-[.3rem] mx-auto mb-[2rem]"
                    src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fhechoenmex.png?alt=media&token=fb3fad01-c714-4cab-a9b6-9e7da86a4402"
                    alt="Hecho en Mexico"
                  />
                </span>
              </div>
            </div>
            <div className="w-full lg:w-6/12 text-[1.6rem]">
              <div className="flex flex-wrap  ">
                <div className="w-full lg:w-6/12 px-4  text-center sm:text-center md:text-center ">
                  <span className="mb-[1rem]">Contactanos</span>
                  <ul className="list-unstyled  texto-footer text-[1.2rem]">
                    <li className="mb-[1.6rem]">
                      <a
                        className=" link-underline-footer "
                        href="tel:+524626932535"
                      >
                        Telefono{" "}
                        <BsFillTelephoneForwardFill className="inline text-[1.3rem] ml-[5px]" />
                      </a>
                    </li>
                    <li className="mb-[1.6rem]">
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
                    <li className="mb-[1.6rem]">
                      <a
                        className="link-underline-footer"
                        href="https://www.facebook.com/messages/t/876531472464645"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Messenger{" "}
                        <BsMessenger className="inline text-[1.3rem] ml-[5px]" />
                      </a>
                    </li>
                    <li className="mb-[2rem]">
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
                    <li className="text-[1.2rem]  text-center"></li>
                    <li className="text-[1.5rem]  text-center">
                      Creado y distribuido por
                      <img
                        className="h-[6rem] w-[8rem]  mx-auto"
                        src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2Fgpohidrodise%C3%B1o.png?alt=media&token=e5375228-e722-4cd3-bdb3-528435e57852"
                        alt="Grupo Hidrodiseño"
                      />
                    </li>
                    <li className="mt-[1.2rem] text-center text-[1.5rem]">
                      Comprar en
                      
                      <a
                        href="https://www.mercadolibre.com.mx/perfil/SILVER+PROTECT"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-16 w-28 bg-[#fff] text-[white] mt-[.5rem] rounded-md p-1  mx-auto "
                          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/mercado-libre-logo.svg?alt=media&token=2336992a-6742-4f1f-85b1-a8a07611fa1e"
                          alt="Mercado libre"
                        />
                        <div className="h-10 w-20 mx-auto " ><GiClick className=" mt-[8px] text-[2.2rem] ml-10 blink"/></div>
                       
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
                  SILVER PROTECT
                </Link>
              </div>
              <span >Sitio creado por <a href="https://github.com/OzkrMebasser" rel="noopener noreferrer" target="_blank" >OzkrMebasser</a></span>

            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
