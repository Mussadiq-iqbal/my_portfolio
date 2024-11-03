import React from 'react';
import image from '../images/hero_image.png'; // Ensure the image path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-between h-auto md:h-[80vh] py-12 px-4 md:px-20">
      {/* Text Area */}
      <div className="w-full md:w-1/2 pl-4 md:pl-16 flex flex-col items-center md:items-start">
  <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center md:text-left">
    Hi,<br /> I am <span className="font-bold">Mussadiq Iqbal</span>
  </h1>
  <h2 className="text-xl md:text-3xl font-medium text-gray-700 mb-4 text-center md:text-left">Expert Front-End Developer</h2>
  <p className="text-base md:text-lg text-gray-600 mb-6 w-full md:w-[85%] text-center md:text-left">
    Step into my world of creativity and innovation in web development. Let's explore the skills and projects that define my passion!
  </p>

  {/* Social Icons */}
  <div className="flex space-x-4 mb-4 md:justify-start md:items-start justify-center items-center">
    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="text-gray-800 hover:text-blue-600 transition-colors" size="2x" />
    </a>
    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-gray-800 hover:text-pink-600 transition-colors" size="2x" />
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="text-gray-800 hover:text-blue-400 transition-colors" size="2x" />
    </a>
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-black transition-colors" size="2x" />
    </a>
  </div>

  <NavLink to='/contact'>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2">
      Contact me
    </button>
  </NavLink>
</div>


      {/* Image Area */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <img 
          src={image} // Use the imported image
          alt="Hero" 
          className="w-[85%] md:w-[65%] h-auto object-cover rounded-full md:mt-5" // Adjusted height to auto to maintain aspect ratio
        />
      </div>
    </section>
  );
}

export default HeroSection;
