import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-8 bg-white relative underlineComp">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">
        {/* <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/desinfectante.png?alt=media&token=e6f65993-f40e-49bd-8cac-b4d689ec46ff"
            alt="/"
          />
          
          <h2 className="text-2xl font-bold text-center py-8">
            Protección Antiseptica
          </h2> */}
        {/* <p className='text-center text-4xl font-bold'>$149</p> */}
        {/* <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4 textos">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div> */}
        {/* <button className="bg-[#0c234c] w-[150px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
          Leer más...
          </button> */}
        {/* </div> */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-transparent"
            src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/seguro.png?alt=media&token=63006524-c69e-4e31-9fea-ef4e134d1558"
            alt="/"
          />
          <h2 className="text-3xl font-bold text-center py-4 uppercase text-[#3f3f3f]">
            Protección Completa
          </h2>

          <div className="text-center font-medium textos">
            <p className="py-2 border-b mx-8 mt-4">
              <img
                className="h-6 w-22 inline"
                src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c"
                alt="silver protect"
              />
              <span className="mr-[5px]"></span>
              es un poderoso antiséptico de amplio espectro con iones de plata,
              que aplicado de forma tópica sobre piel y mucosas, tiene la
              capacidad de aliviar y acelerar el proceso de cicatrización,
              además de desinfectar al destruir los microorganismos e inhibir su
              reproducción. También actúa contra hongos bacterias y virus.
            </p>
          </div>
          {/* <button className="bg-[#0c234c] w-[150px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
          Leer más...
          </button> */}
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/100natural.svg?alt=media&token=8d1fb4f4-6d04-4686-9f5b-b9c6506e2830"
            alt="/"
          />
          <h2 className="text-3xl font-bold text-center py-4 uppercase text-[#3f3f3f]">
            Producto 100% Natural
          </h2>

          <div className="text-center font-medium textos">
            <p className="py-2 border-b mx-8 mt-4">
            <img
                className="h-6 w-22 inline"
                src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/silver2.png?alt=media&token=2c7b110e-2612-42a8-8308-91a16ca45f4c"
                alt="silver protect"
              />
              <span className="mr-[5px]"></span> es 100% natural, la actividad de los iones de plata
              contenidos en su formula es continua y duradera y su efecto es
              limpio e inocuo para otros seres vivos. Además de no provocar
              resistencia bacteriana.
            </p>
          </div>
          {/* <button className="bg-[#0c234c] w-[150px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
          Leer más...
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
