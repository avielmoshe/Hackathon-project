import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const VolunteerSection = () => {
  const handleVolunteerClick = () => {
    alert("Thank you for your interest in volunteering with us!");
    // Aqui você pode redirecionar para outra página ou abrir um formulário de voluntariado
    // Exemplo: navigate("/volunteer") se estiver usando React Router
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Join Us as a Volunteer
      </h2>
      <button
        className="flex flex-col items-center justify-center bg-green-500 text-white p-6 rounded-lg shadow-lg hover:scale-110 hover:bg-green-600 transition-transform duration-300 ease-in-out"
        onClick={handleVolunteerClick}
      >
        <FaHandsHelping className="text-3xl mb-2" />
        <span>Volunteer</span>
      </button>
    </div>
  );
};

export default VolunteerSection;
