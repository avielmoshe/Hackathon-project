import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { deleteCookie } from "@/utils/api.service";
import { setUser } from "@/store/slices/userSlice";
import { url } from "inspector";

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
      <header
        className="fixed top-0 z-50 w-full shadow-md transition-all duration-300 bg-blue-200 dark:bg-gray-700"

      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Menu Hamburguer para Mobile */}
          <div
            className="relative lg:hidden block"
            onMouseEnter={() => setIsSidebarOpen(true)}
            onMouseLeave={() => setIsSidebarOpen(false)}
          >
            <button
              className="p-2 rounded-full"
            >
              <FaBars
                className="w-8 h-8"
              // style={{ color: user.isDarkMode ? "#ecc94b" : "#2b6cb0" }}
              />
            </button>
            {isSidebarOpen && (
              <div
                className="absolute left-0 top-12 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
              >
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="block dark: text-white hover:text-orange-500 transition-all"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      className="block hover:text-orange-500 transition-all"
                    >
                      About
                    </Link>
                  </li>
                  {user.role === "guest" && (
                    <>
                      <li>
                        <Link
                          to="/login"
                          className="block hover:text-orange-500 transition-all"
                        >
                          LogIn
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/signUp"
                          className="block hover:text-orange-500 transition-all"
                        >
                          SignUp
                        </Link>
                      </li>
                    </>
                  )}
                  {user.role === "provider" && (
                    <>
                      <li>
                        <Link
                          to={`/Profile/${user.id}`}
                          className="block hover:text-orange-500 transition-all"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Yourpost"
                          className="block hover:text-orange-500 transition-all"
                        >
                          Your Post
                        </Link>
                      </li>
                    </>
                  )}
                  {user.role !== "guest" && (
                    <li>
                      <button
                        className="block hover:text-orange-500 transition-all"
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
              </div>
            )}
          </div>

          {/* NavBar para telas maiores */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
                  style={{
                    color: user.isDarkMode ? "black" : "#white",
                    hover: { color: "#ed8936" },
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
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
                      className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    >
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signUp"
                      className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
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
                      className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Yourpost"
                      className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
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
                    className="inline-block hover:scale-200 transform transition-transform duration-500 ease-in-out"
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
          {/* <div
            className="w-16 h-16 bg-cover bg-center rounded-full"
            style={{
              backgroundImage: "url('./assets/2gether.jpeg')", // Ajuste o caminho
            }}
          ></div> */}
          {/* Profile Image e Dark Mode */}
          <div className="flex items-center space-x-4">
            {user.profileImg ? (
              <img
                src={user.profileImg}
                alt={user.firstName || "User"}
                className="w-12 h-12 rounded-full object-cover hover:scale-110 transition duration-200"
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