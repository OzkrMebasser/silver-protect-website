import React from "react";


const About = () => {
  return (
    <div className="relative w-full px-20 bg-[white] py-16 underlineComp">
      <div className=" grid md:grid-cols-2 mx-auto  ">
        <img
          className="w-[380px] hover:scale-105 duration-300 rounded-lg shadow-xl "
          src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/About.jpg?alt=media&token=8e8ed70c-4d9b-40c5-b389-d1f2017b3b15"
          alt="/"
        />
        <div className="flex flex-col justify-center ">
          {/* <p className="text-[#0c2e51] font-bold ">¡Que </p> */}
          <h1 className=" text-[#3f3f3f] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            SILVER PROTECT
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-[#0c234c] text-[white] w-[150px] rounded-md font-medium my-6  md:mx-0 py-3">
            Leer mas...
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
