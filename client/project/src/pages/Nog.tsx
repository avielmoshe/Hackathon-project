import React, { useState } from "react";
import { FaDonate, FaComments, FaHandsHelping } from "react-icons/fa";

const Nog = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = () => {
    alert(`Thank you for donating $${donationAmount}!`);
    setDonationAmount("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 dark:text-blue-300">
          Support Our Mission
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Your generosity helps us make a difference!
        </p>
      </header>

      {/* Donation Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Make a Donation
        </h2>
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Enter amount (USD)"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleDonate}
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
        >
          Donate Now
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6">
        {/* Chat */}
        <button
          className="flex flex-col items-center justify-center bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:scale-110 hover:bg-blue-600 transition-transform duration-300 ease-in-out"
          onClick={() => alert("Opening chat!")}
        >
          <FaComments className="text-3xl mb-2" />
          <span>Chat</span>
        </button>

        {/* Volunteer */}
        <button
          className="flex flex-col items-center justify-center bg-green-500 text-white p-6 rounded-lg shadow-lg hover:scale-110 hover:bg-green-600 transition-transform duration-300 ease-in-out"
          onClick={() => alert("Volunteer with us!")}
        >
          <FaHandsHelping className="text-3xl mb-2" />
          <span>Volunteer</span>
        </button>

        {/* Donate */}
        <button
          className="flex flex-col items-center justify-center bg-yellow-500 text-white p-6 rounded-lg shadow-lg hover:scale-110 hover:bg-yellow-600 transition-transform duration-300 ease-in-out"
          onClick={() => alert("Redirecting to donation options!")}
        >
          <FaDonate className="text-3xl mb-2" />
          <span>Donate</span>
        </button>
      </div>
    </div>
  );
};

export default Nog;
