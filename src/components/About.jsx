import React from 'react';
import { ImDownload2 } from "react-icons/im";

const About = () => {
    return (
        <div className="bg-transparent p-6 md:p-16">
            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-400">About Me</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Get to know more about my journey and experiences in the IT field.
                </p>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Left Side - Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="src/assets/profile.jpeg"
                        alt="Abhishek Verma"
                        className="rounded-lg h-52 w-52 md:h-80 md:w-72 object-cover border-2  shadow-lg border-orange-500"
                    />
                </div>

                {/* Right Side - Description */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
                        Hi, I'm Abhishek Verma
                    </h2>
                    <p className="text-gray-400 text-lg mb-4">
                        I am a passionate Full Stack Developer with 1.5 years of experience in the IT field. I specialize in building scalable web and mobile applications, focusing on delivering quality and performance.
                    </p>
                    <p className="text-gray-400 text-lg">
                        With expertise in both frontend and backend technologies, I bring ideas to life and create seamless digital experiences. Let's build something amazing together!
                    </p>
                    <div className="  flex justify-center md:justify-start">
  <div className="flex items-center bg-orange-500 text-gray-800 rounded-lg px-4 py-2 mt-4 hover:bg-orange-600 transition">
    <ImDownload2 className="mr-2 text-gray-800" />
    <span className="font-semibold">
    <a
              href="src/assets/Abhishek-resume.pdf"
              download="Abhishek_Varma_CV.pdf"
              className="text-gray-950"
            >
              Download CV
              </a></span>
  </div>
</div>


                </div>
            </div>
        </div>
    );
};

export default About;
