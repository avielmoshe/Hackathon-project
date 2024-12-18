import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Biblioteca de ícones (Font Awesome)

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sincronizar o estado com a classe `dark` no HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = (): void => setIsDarkMode(!isDarkMode);

  return (
    <button
      className="p-3 rounded-full bg-sun-secondary dark:bg-dark-secondary text-sun-accent dark:text-dark-accent shadow-lg transition duration-300 hover:scale-110"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <FaSun className="w-6 h-6 text-sun-accent" /> // Ícone de Sol
      ) : (
        <FaMoon className="w-6 h-6 text-dark-accent" /> // Ícone de Lua
      )}
    </button>
  );
};

export default DarkMode;
