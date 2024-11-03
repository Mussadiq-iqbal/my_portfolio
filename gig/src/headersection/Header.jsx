import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-8 bg-gray-800 text-white relative">
      {/* Name on the left */}
      <div className="text-xl font-semibold">Mussadiq</div>

      {/* Links in the center (hidden on mobile) */}
      <nav className="hidden md:flex space-x-10">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
          Home
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
          Projects
        </NavLink>
        <NavLink to="/cv" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
          CV
        </NavLink>
      </nav>

      {/* Contact Me button on the right (hidden on mobile) */}
      <NavLink to='/contact'>
      <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        Contact Me
      </button>
      </NavLink>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white-400 focus:outline-none">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 z-50 md:hidden">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
            Home
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
            Projects
          </NavLink>
          <NavLink to="/cv" className={({ isActive }) => (isActive ? "text-gray-300" : "hover:text-gray-300")}>
            CV
          </NavLink>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
