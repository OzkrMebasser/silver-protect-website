import React from "react";

const About = () => {
  return (
    <div className="relative w-full px-20 bg-[white] py-16 underlineComp">
      <div className=" grid md:grid-cols-2 mx-auto bg-[white]  ">
        <img
          className="w-[380px] hover:scale-105 duration-300 rounded-lg shadow-xl "
          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/About.jpg?alt=media&token=8e8ed70c-4d9b-40c5-b389-d1f2017b3b15"
          alt="/"
        />
        <div className="flex flex-col justify-center items-center ">
          {/* <p className="text-[#0c2e51] font-bold ">¡Que </p> */}
          <h1 className=" text-[#3f3f3f] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            ¿QUIENES SOMOS?
          </h1>
          <span className="items-baseline ">
            <p className=" text-justify ">
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
              <br />
              Es asi como nace
              <span className="ml-1"></span>{" "}
              <img
                className="h-6 w-22 inline"
                src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c"
                alt="silver protect"
              />
              y su compromiso con la salud y el bienestar de la población.
              Convencidos que llegaremos a todos los hogares mexicanos para
              brindarles la protección que necesitan.
            </p>
          </span>
          <button className="bg-[#0c234c] text-[white] w-[150px] rounded-md font-medium my-6  md:mx-0 py-3">
            Leer mas...
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
