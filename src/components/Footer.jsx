import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/portfolio_logo.png"
            alt="Logo"
            className="h-12 w-12 object-cover"
          />
        </div>

        {/* Thank You Message */}
        <div className="text-center md:text-left text-gray-400 font-semibold">
          Thank you for visiting my portfolio. I look forward to working with you!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
