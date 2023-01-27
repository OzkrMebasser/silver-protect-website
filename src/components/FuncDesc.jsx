import React from "react";
import {BsCloudArrowDownFill} from "react-icons/bs";  

const FuncDesc = () => {
  return (
    <div className="relative w-full md:px-20 px-10 bg-[white] py-16 underlineComp">
      <div className=" grid md:grid-cols-2 mx-auto bg-[white] ">
        <div className="flex flex-col justify-center items-center  bg-[white] ">
          {/* <p className="text-[#0c2e51] font-bold ">¡Que </p> */}
          <h1 className=" text-[#3f3f3f] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            ¿COMO FUNCIONA?
          </h1>
          <span className="items-baseline ">
            <p className=" text-justify text-[1.2rem] tracking-[1.5px] ">
              <img
                className="h-6 w-22 inline"
                src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c"
                alt="silver protect"
              />
              <span className="ml-1"></span>
              es una marca mexicana especialazada en la creación y venta de
              productos a base de plata iónica de la más alta calidad, 100%
              naturales y seguros. En 2014 sus fundadores vieron la oportunidad
              de crear un producto innovador con iones de plata, al darse cuenta
              que el mercado en México era prácticamente virgen, todo lo
              contrario a lo que estaba ocurriendo en Europa, donde las
              soluciones con plata ya eran comunes y utilizadas para la
              desinfección de supercies, alimentos y pricipalmente como
              antiséptico para el tratamiento de heridas y quemaduras.
            </p>
          </span>

          <button className="bg-[#0c234c] text-[1.2rem] text-[#fff] tracking-[1.5px] w-[150px] rounded-md  my-6  md:mx-0 py-3">
            <a href="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/SilverProtectInfo.pdf?alt=media&token=a47ae6d1-4b9a-44ab-b6cb-357cfd70c3c5" target="_blank" rel="noopener noreferrer">Leer mas... {" "}< BsCloudArrowDownFill className="inline" /></a>
          </button>
          
          </div>
          <span className=" m-auto duration-300 rounded-lg shadow-xl md:ml-56 bg-[black] ">
          <img
            className=" hover:scale-105 duration-300 rounded-lg shadow-xl  "
            src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/Nucleo.png?alt=media&token=a220386b-6fac-4720-9156-8b4320785b05"
            alt="/"
          />
          </span>
          
      </div>
    </div>
  );
};

export default FuncDesc;
