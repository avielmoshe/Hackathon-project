import React from 'react';
import { FaSearch } from 'react-icons/fa';
import DarkMode from './DarkMode'; // Importando seu componente DarkMode
import { Link } from 'react-router-dom'; // Corrigido o import do Link

const Header: React.FC = () => {
  return (
    <header className="w-full bg-sun-background dark:bg-dark-background text-sun-primary dark:text-dark-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Navbar */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-sun-accent dark:hover:text-dark-accent transition duration-300"
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-sun-accent dark:hover:text-dark-accent transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-sun-accent dark:hover:text-dark-accent transition duration-300"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-sun-accent dark:hover:text-dark-accent transition duration-300"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-sun-accent dark:hover:text-dark-accent transition duration-300"
              >
                About
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
            className="w-full p-2 pl-10 rounded-full bg-sun-secondary dark:bg-dark-secondary text-sun-text dark:text-dark-accent focus:outline-none"
          />
        </div>

        {/* Dark Mode */}
        <div>
          <DarkMode />
        </div>

        {/* Profile Image */}
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
