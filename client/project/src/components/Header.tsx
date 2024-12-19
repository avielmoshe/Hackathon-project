import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { deleteCookie } from "@/utils/api.service";
import { setUser } from "@/store/slices/userSlice";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full dark:bg-gray-900 bg-gray-400 text-foreground shadow-md transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Menu Hamburguer para Mobile */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden block p-2 rounded-full bg-input hover:scale-110 transition-all duration-300"
          >
            <FaBars className="w-8 h-8 text-primary" />
          </button>

          {/* NavBar para telas maiores */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                >
                  About
                </Link>
              </li>

              {/* Guest Links */}
              {user.role === "guest" && (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    >
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signUp"
                      className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}

              {/* Provider Links */}
              {user.role === "provider" && (
                <>
                  <li>
                    <Link
                      to={`/Profile/${user.id}`}
                      className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Yourpost"
                      className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    >
                      Your Post
                    </Link>
                  </li>
                </>
              )}

              {/* LogOut */}
              {user.role !== "guest" && (
                <li>
                  <button
                    className="inline-block text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    onClick={() => {
                      deleteCookie();
                      navigate("/");
                      dispatch(setUser({ role: "guest" }));
                    }}
                  >
                    LogOut
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="relative w-1/3 hidden lg:block">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 rounded-full bg-input text-foreground placeholder-muted-foreground focus:outline-none"
            />
          </div>

          {/* Profile Image e Dark Mode */}
          <div className="flex items-center space-x-4">
            {user.profileImg ? (
              <img
                src={user.profileImg}
                alt={user.firstName || "User"}
                className="w-10 h-10 rounded-full object-cover hover:scale-110 transition duration-200"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                alt="Default Profile"
                className="w-10 h-10 rounded-full object-cover hover:scale-110 transition duration-200"
              />
            )}
            <DarkMode />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

