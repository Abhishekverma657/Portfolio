import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlutter, SiDart, SiCplusplus } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';

const skills = [
  { name: 'HTML', level: 85, icon: <FaHtml5 className="text-gray-400 text-4xl" /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt className="text-gray-400  text-4xl" /> },
  { name: 'JavaScript', level: 85, icon: <FaJs className="text-gray-400  text-4xl" /> },
  { name: 'ReactJS', level: 80, icon: <FaReact className="text-gray-400  text-4xl" /> },
  { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-gray-400  text-4xl" /> },
  { name: 'Express', level: 65, icon: <SiExpress className="text-gray-400  text-4xl" /> },
  { name: 'Flutter', level: 90, icon: <SiFlutter className="text-gray-400  text-4xl" /> },
  { name: 'Dart', level: 80, icon: <SiDart className="text-gray-400  text-4xl" /> },
  { name: 'React Native', level: 60, icon: <FaReact className="text-gray-400 0 text-4xl" /> },
  { name: 'C', level: 85, icon: <CgCPlusPlus className="text-gray-400  text-4xl" /> },
  { name: 'C++', level: 85, icon: <SiCplusplus className="text-gray-400  text-4xl" /> },
  { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-gray-400  text-4xl" /> },
];

const Skills = () => {
  return (
    <div className="bg-transparent py-12 px-4 md:px-16">
      <h2 className="text-center text-3xl font-bold text-gray-400 mb-6">Skills</h2>
      <p className="text-center text-gray-600 mb-10">My technical skills and their proficiency levels.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-transparent rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Circular Progress */}
            <div className="relative w-24 h-24">
              <svg
                className="w-full h-full"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#d1d5db" /* Gray */
                  strokeWidth="3"
                />
                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#FD6F00" /* Orange */
                  strokeWidth="3"
                  strokeDasharray="100"
                  strokeDashoffset={`${100 - skill.level}`}
                  strokeLinecap="round"
                  transform="rotate(90 18 18)" /* Adjusted for clockwise fill */
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                {skill.icon}
              </div>
            </div>
            {/* Percentage and Skill Name */}
            <span className="text-sm text-orange-500 font-bold mt-4">{skill.level}%</span>
            <span className="text-lg font-semibold text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
