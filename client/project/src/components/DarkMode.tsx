import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="p-3 rounded-full bg-input text-foreground hover:scale-110 shadow-md hover:shadow-lg transition-transform duration-300"
    >
      {isDark ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-blue-500 w-6 h-6" />
      )}
    </button>
  );
};

export default DarkMode;

