import { crateNewProvider, updateProviderApi } from "@/utils/api.service";
import { useState } from "react";

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



  const [formData, setFormData] = useState({
    bio: "",
    webLink: "",
    providerType: "",
    profileImg: "",
    bannerImg: "",
    location: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.bio.trim() || !formData.location.trim()) {
      setErrorMessage("All required fields must be filled out.");
      return;
    }

    setErrorMessage("");

    const response = await crateNewProvider(formData);
    if (response.status) {
      setErrorMessage(response.status);
    }
    if (response.error.message === "provider already exists") {
      const updatedResponse = await updateProviderApi(formData);
      console.log(updatedResponse);

      setErrorMessage(updatedResponse.message);
    }
  };

  const handleTypeToggle = (selectedRole: string) => {
    setFormData((prevData) => ({
      ...prevData,
      providerType: prevData.providerType === selectedRole ? "" : selectedRole,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, location: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-black-600 mt-4">
            Update your profile to help improve our community.
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="bio"
              type="text"
              placeholder="Bio"
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
              placeholder="Website Link"
              value={formData.webLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="profileImg"
              type="text"
              placeholder="Profile Image URL"
              value={formData.profileImg}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="bannerImg"
              type="text"
              placeholder="Banner Image URL"
              value={formData.bannerImg}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              required
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
                formData.providerType === "private"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              Private
            </button>
            <button
              type="button"
              onClick={() => handleTypeToggle("ngo")}
              className={`w-32 h-10 ${
                formData.providerType === "ngo"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              NGO
            </button>
          </div>
          {errorMessage && (
            <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 mt-3 rounded-lg transition-colors"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
