import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          <Link to="/">SAMSIE</Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/ourServices" className="hover:text-yellow-500">
            Services
          </Link>
          <Link to="/ourProjects" className="hover:text-yellow-500">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none text-yellow-500"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 text-yellow-500 hover:bg-gray-800" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/ourServices" className="block px-4 py-2 text-yellow-500 hover:bg-gray-800" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/ourProjects" className="block px-4 py-2 text-yellow-500 hover:bg-gray-800" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-yellow-500 hover:bg-gray-800" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
