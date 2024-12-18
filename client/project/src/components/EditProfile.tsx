import { useState } from "react";
import { useNavigate } from "react-router-dom";

const regions = [
  "North",
  "Central",
  "South",
  "Jerusalem and Surroundings",
  "Negev",
  "Shfela (Lowland)",
  "Sharon",
  "Coastal Plain",
  "Golan Heights",
  "Galilee",
];

function EditProfile() {
  //  רק אם הid שמגיע מהקריאת api שווה לid של הסטייט הגלובלי - להציג את הedit

  // location
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    bio: "",
    webLink: "",
    provaiderType: "",
    profileImg: "",
    bannerImg: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field.trim())) {
      return;
    }
    console.log(formData);
  };

  const handleTypeToggle = (selectedRole: string) => {
    setFormData((prevData) => ({
      ...prevData,
      provaiderType:
        prevData.provaiderType === selectedRole ? "" : selectedRole,
    }));
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle region selection change
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, location: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="hlLogo mx-auto bg-gray-300 rounded-full h-16 w-16"></div>
          <h1 className="text-black-600 mt-4">
            Sign up so you can easily help improve our community.
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="phone"
              type="number"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              name="firstName"
              type="text"
              placeholder="first name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="lastName"
              type="text"
              placeholder="last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              name="bio"
              type="text"
              placeholder="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="webLink"
              type="text"
              placeholder="webLink"
              value={formData.webLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="profileImg"
              type="text"
              placeholder="profileImg"
              value={formData.profileImg}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="bannerImg"
              type="text"
              placeholder="bannerImg"
              value={formData.bannerImg}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">
              Select Region
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleRegionChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button
              type="button"
              onClick={() => handleTypeToggle("private")}
              className={`w-32 h-10 ${
                formData.provaiderType === "private"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              private
            </button>
            <button
              type="button"
              onClick={() => handleTypeToggle("ngo")}
              className={`w-32 h-10 ${
                formData.provaiderType === "ngo"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              ngo
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
