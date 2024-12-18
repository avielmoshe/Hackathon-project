import React from 'react';
import { FaSearch } from 'react-icons/fa';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-sun-background dark:bg-dark-background text-sun-primary dark:text-dark-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* NavBar */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="inline-block text-sun-primary dark:text-gray-400 hover:text-sun-accent dark:hover:text-dark-accent hover:scale-110 transition-all duration-300">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/Profile/:id" className="inline-block text-sun-primary dark:text-gray-400 hover:text-sun-accent dark:hover:text-dark-accent hover:scale-110 transition-all duration-300">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/About" className="inline-block text-sun-primary dark:text-gray-400 hover:text-sun-accent dark:hover:text-dark-accent hover:scale-110 transition-all duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="inline-block text-sun-primary dark:text-gray-400 hover:text-sun-accent dark:hover:text-dark-accent hover:scale-110 transition-all duration-300">
                LogIn
              </Link>
            </li>
            <li>
              <Link to="/signUp" className="inline-block text-sun-primary dark:text-gray-400 hover:text-sun-accent dark:hover:text-dark-accent hover:scale-110 transition-all duration-300">
                SignUp
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 rounded-full bg-sun-secondary dark:bg-[#f8b27d] text-sun-text dark:text-dark-accent placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none"
          />
        </div>


        {/* Profile Image e Dark Mode */}
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover hover:scale-110 transition duration-200"
          />
          {/* Dark Mode */}

          <DarkMode />

        </div>

      </div>
    </header>
  );
};

export default Header;
