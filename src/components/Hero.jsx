import React from 'react';

const Hero = () => {
  return (
    <div className="bg-transparent flex flex-col md:flex-row items-center justify-between p-6 md:p-16">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-xl md:text-2xl mt-4 font-semibold text-gray-400 leading-tight">
          Hi I am <br />
          <span className='text-xl md:text-2xl mt-4 font-semibold text-gray-400'>Abhishek Verma</span>
        </h1>
        <p className=" text-4xl md:text-5xl mt-4 font-bold text-orange-500">
          Software Engineer
        </p>
        <div className='  '>
            <button className=' bg-orange-500 px-2 py-1 m-2 rounded-lg text-gray-800 font-sans'>
               <a href="#contact">Hire Me</a>
              </button>
            <button className=' border border-gray-500 rounded-lg  px-2 py-1 m-2 text-gray-400 font-sans' >
            <a
              href="src/assets/Abhishek-resume.pdf"
              download="Abhishek_Varma_CV.pdf"
              className="text-gray-400"
            >
              Download CV
              </a>
              </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center relative">
  {/* Circular Border */}
  <div className="rounded-full bg-transparent border border-orange-500 p-2 md:p-4">
    {/* Image */}
    <img
      src="src/assets/profile_pic.png"
      alt="Abhishek Verma"
      className="rounded-full h-56 w-56 md:h-80 md:w-80 object-cover"
    />
  </div>
</div>

    </div>
  );
};

export default Hero;
