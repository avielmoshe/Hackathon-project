import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="w-full bg-background text-foreground shadow-md transition-all duration-300">
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
                <Link to="/" className="hover:text-primary hover:scale-110 transition-all duration-300">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-primary hover:scale-110 transition-all duration-300">
                  About
                </Link>
              </li>

              {/* Guest Links */}
              {user.role === "guest" && (
                <>
                  <li>
                    <Link to="/login" className="hover:text-primary hover:scale-110 transition-all duration-300">
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link to="/signUp" className="hover:text-primary hover:scale-110 transition-all duration-300">
                      SignUp
                    </Link>
                  </li>
                </>
              )}

              {/* Provider Links */}
              {user.role === "provider" && (
                <>
                  <li>
                    <Link to={`/Profile/${user.id}`} className="hover:text-primary hover:scale-110 transition-all duration-300">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/Yourpost" className="hover:text-primary hover:scale-110 transition-all duration-300">
                      Your Post
                    </Link>
                  </li>
                </>
              )}

              {/* LogOut */}
              {user.role !== "guest" && (
                <li>
                  <button
                    className="hover:text-destructive hover:scale-110 transition-all duration-300"
                    onClick={() => console.log("User logged out")}
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

      {/* Sidebar para Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background text-foreground shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-primary hover:scale-110 transition"
        >
          X
        </button>
        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <Link to="/" className="hover:text-primary transition-all duration-300">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-primary transition-all duration-300">
              About
            </Link>
          </li>

          {/* Guest Links */}
          {user.role === "guest" && (
            <>
              <li>
                <Link to="/login" className="hover:text-primary transition-all duration-300">
                  LogIn
                </Link>
              </li>
              <li>
                <Link to="/signUp" className="hover:text-primary transition-all duration-300">
                  SignUp
                </Link>
              </li>
            </>
          )}

          {/* Provider Links */}
          {user.role === "provider" && (
            <>
              <li>
                <Link to={`/Profile/${user.id}`} className="hover:text-primary transition-all duration-300">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/Yourpost" className="hover:text-primary transition-all duration-300">
                  Your Post
                </Link>
              </li>
            </>
          )}

          {/* LogOut */}
          {user.role !== "guest" && (
            <li>
              <button
                className="hover:text-destructive transition-all duration-300"
                onClick={() => console.log("User logged out")}
              >
                LogOut
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
