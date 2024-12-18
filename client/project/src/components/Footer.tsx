import React from "react";
import { FaProjectDiagram, FaUniversity, FaBuilding, FaUserShield } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-sun-primary dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer Items */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Hackathon Project */}
          <div className="flex items-center gap-2">
            <FaProjectDiagram size={24} className="text-blue-600 dark:text-yellow-500" />
            <span className="font-medium">Hackathon Project</span>
          </div>

          {/* IITC College */}
          <div className="flex items-center gap-2">
            <FaUniversity size={24} className="text-green-600 dark:text-green-400" />
            <span className="font-medium">IITC College</span>
          </div>

          {/* Atidim */}
          <div className="flex items-center gap-2">
            <FaBuilding size={24} className="text-purple-600 dark:text-purple-400" />
            <span className="font-medium">Atidim</span>
          </div>

          {/* Combat Soldiers to High-Tech */}
          <div className="flex items-center gap-2">
            <FaUserShield size={24} className="text-red-600 dark:text-red-400" />
            <span className="font-medium">Combat Soldiers to the High-Tech</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Hackathon Project Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
