// import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa'; // Biblioteca de ícones (Font Awesome)

// const DarkMode: React.FC = () => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   // Sincronizar o estado com a classe `dark` no HTML
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   const toggleTheme = (): void => setIsDarkMode(!isDarkMode);

//   return (
//     <button
//       className="w-12 h-12 flex items-center justify-center rounded-full bg-sun-secondary dark:bg-[#f8b27d] text-sun-accent dark:text-dark-accent shadow-lg transition duration-200 hover:scale-110"
//       onClick={toggleTheme}
//     >
//       {isDarkMode ? (
//         <FaSun className="w-6 h-6 text-sun-accent" /> // Ícone de Sol
//       ) : (
//         <FaMoon className="w-6 h-6 text-dark-accent" /> // Ícone de Lua
//       )}
//     </button>
//   );
// };

// export default DarkMode;

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      className="p-3 rounded-full bg-sun-secondary dark:bg-dark-secondary text-sun-accent dark:text-dark-accent shadow-lg transition duration-300 hover:scale-110"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default DarkMode;
