import React, {Fragment} from 'react';


const About = () => {
  return (
    <Fragment>

    <div className="relative w-full md:px-20 px-10 bg-[white] py-16 underlineComp">
      <div className=" grid md:grid-cols-2 mx-auto bg-[white]  ">
        <img
          className="w-[380px] hover:scale-105 duration-300 rounded-lg shadow-xl "
          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/cicatrizanteabout.png?alt=media&token=0be5fcfa-70ae-4aad-9574-8d58978958a6"
          alt="cicatrizante"
        />
        <div className="flex flex-col justify-center items-center ">
          {/* <p className="text-[#0c2e51] font-bold ">¡Que </p> */}
          <h1 className=" text-[#3f3f3f] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            ¿QUIENES SOMOS?
          </h1>
          <span className="items-baseline ">
            <p className=" text-justify text-[1rem] tracking-[.5px] textos ">
              <img
                className="h-6 w-22 inline"
                src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c"
                alt="silver protect"
              />
              <span className="mr-[5px]"></span>
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
               <span className="ml-1"></span>{" "}
              y su compromiso con la salud y el bienestar de la población.
              Convencidos que llegaremos a todos los hogares mexicanos para
              brindarles la protección que necesitan.
            </p>
          </span>
          {/* <button className="bg-[#0c234c] text-[white] w-[150px] rounded-md font-medium my-6  md:mx-0 py-3">
            Leer mas...
          </button> */}
        </div>
      </div>
    </div>
    {/* <FloatContact/> */}
    </Fragment>
  );
};

export default About;
