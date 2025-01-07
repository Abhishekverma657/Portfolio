import React from 'react';
import { FaLaptopCode } from "react-icons/fa6";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const Services = () => {
  return (
    <>
      <div className="bg-transparent flex flex-col items-center  justify-center p-6 md:p-16">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-400  text-center">
          Services
        </h1>
        <p className="text-gray-600 text-center max-w-xl mb-8">
          Offering professional solutions tailored for your needs.
        </p>

        {/* Services Container */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full max-w-5xl place-items-center">
          {/* Card 1: Web Development */}
          <div className="bg-[#2c2c2c] shadow-lg   rounded-lg p-9 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:border border-e-orange-400">
            <div className="text-orange-500 text-5xl mb-4">
              {/* <img src="src/assets/weblogo.svg "  alt="" className=' h-20 w-20 text-orange-600 '  />
               */}
               <FaLaptopCode />
            </div>
            <h2 className="text-xl font-semibold text-gray-200 mb-2">
              Web Development
            </h2>
            <p className="text-sm text-gray-400">
              Build modern, responsive, and dynamic websites tailored to your
              needs.
            </p>
          </div>
          
          

          {/* Card 2: Cross-Platform App Development */}
          <div className="bg-[#2c2c2c]  shadow-lg rounded-lg p-9 flex flex-col items-center text-center transition-transform transform hover:scale-105  hover:border border-e-orange-400">
            <div className="text-orange-500 text-5xl mb-4">
            <HiDevicePhoneMobile />
            </div>
            <h2 className="text-xl font-semibold text-gray-200 mb-2">
              App Development
            </h2>
            <p className="text-sm text-gray-400">
              Create seamless apps for iOS and Android with cross-platform
              solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
