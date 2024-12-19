import Categories from "@/components/Categories";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const statuses = [
  "Single mother",
  "Single father",
  "Active-duty soldier",
  "Reservist",
  "Undergraduate student",
  "Graduate student",
  "Doctoral student",
  "Person with a physical disability",
  "Person with a mental disability",
  "Retiree",
  "Pensioner",
  "New immigrant",
  "Returning resident",
  "Unemployment benefits recipient",
  "Part-time worker",
  "Minority group member",
];

const locations = [
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

function Yourpost() {
  const [isPostExist, setIsPostExist] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const params = useParams();

  //   useEffect(() => {
  //     (async () => {
  //       const providerData = await getProviderByUserId(params.id);
  //       if (providerData.dontHaveData) {
  //         setIsPostExist((prev) => false);
  //       } else {
  //         setIsPostExist((prev) => true);
  //       }
  //     })
  //   }, [params.id]);

  const [formData, setFormData] = useState({
    bio: "",
    location: "",
    serviceType: [],
  });

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, location: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          type="text"
          placeholder="description"
          // value={formData.email}
          // onChange={description}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required={isPostExist}
        />

        <input
          name="title"
          type="text"
          placeholder="title"
          // value={formData.email}
          // onChange={description}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required={isPostExist}
        />
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
            {locations.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            categories
          </button>
          {isOpen && <Categories />}
        </div>
        <button type="submit"> </button>
      </form>
    </div>
  );
}

export default Yourpost;
