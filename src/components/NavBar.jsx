import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-transparent p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center ">
            <img
              src="src/assets/portfolio_logo.png"
              alt="Logo"
              className="h-16 w-16 object-cover  fill-orange-500"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-white px-3 py-2 rounded hover:text-orange-500">
              Home
            </a>
            <a href="#services" className="text-white px-3 py-2 rounded hover:text-orange-500">
              Services
            </a>
            <a href="#about" className="text-white px-3 py-2 rounded hover:text-orange-500">
              About
            </a>
            <a href="#skills" className="text-white px-3 py-2 rounded hover:text-orange-500">
              Skills
            </a>
            <a href="#projects" className="text-white px-3 py-2 rounded hover:text-orange-500">
              Projects
            </a>
            <a href="#contact" className="text-white px-3 py-2 rounded hover:text-orange-500">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-transparent space-y-2 p-4">
            <a href="#home" className="block text-white px-3 py-2 rounded hover:text-orange-500">
              Home
            </a>
            <a href="#services" className="block text-white px-3 py-2 rounded hover:text-orange-500">
              Services
            </a>
            <a href="#about" className="block text-white px-3 py-2 rounded hover:text-orange-500">
              About
            </a>
            <a href="#skills" className="block text-white px-3 py-2 rounded hover:text-orange-500">
              Skills
            </a>
            <a href="#projects" className="block text-white px-3 py-2 rounded hover:text-orange-500">
              Projects
            </a>
            <a href="#contact" className="block text-white px-3 py-2 rounded hover:text-orange-500">
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
