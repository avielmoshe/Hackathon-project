import Categories from "@/components/Categories";
import MapAccordion from "@/components/MapAccordion";
import { Button } from "@/components/ui/button";
import { createPost } from "@/utils/api.service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const categories = [
  {
    category: "Food",
    subcategories: [
      "Personal Meal Preparation",
      "Meal Delivery",
      "Event Catering",
      "Holiday Meal Assistance",
      "Food for Special Diets",
    ],
  },
  {
    category: "Household Help",
    subcategories: [
      "House Cleaning",
      "Furniture Moving",
      "Organization and Decluttering",
      "Laundry Assistance",
      "Gardening",
    ],
  },
  {
    category: "Plumbing Services",
    subcategories: [
      "Leak Repair",
      "Pipe Installation",
      "Drain Cleaning",
      "Bathroom Installation",
      "Water Heater Repair",
    ],
  },
  {
    category: "Education",
    subcategories: [
      "Tutoring",
      "Test Preparation",
      "Language Learning",
      "Skill Development",
      "Online Courses",
    ],
  },
  {
    category: "Emotional Support",
    subcategories: [
      "Counseling",
      "Therapy",
      "Grief Support",
      "Peer Support",
      "Mental Health Resources",
    ],
  },
  {
    category: "Repairs & Maintenance",
    subcategories: [
      "Electrical Repairs",
      "Appliance Repairs",
      "Home Maintenance",
      "HVAC Services",
      "Painting & Touch-ups",
    ],
  },
  {
    category: "Pet Care",
    subcategories: [
      "Dog Walking",
      "Pet Sitting",
      "Pet Grooming",
      "Veterinary Assistance",
      "Pet Training",
    ],
  },
  {
    category: "Childcare",
    subcategories: [
      "Babysitting",
      "Nanny Services",
      "Childhood Education",
      "Special Needs Assistance",
      "After-School Care",
    ],
  },
  {
    category: "Transportation",
    subcategories: [
      "Car Pooling",
      "Delivery Services",
      "Taxi Services",
      "Bike Rentals",
      "Ride Sharing",
    ],
  },
  {
    category: "Legal Services",
    subcategories: [
      "Legal Consultation",
      "Contract Review",
      "Family Law",
      "Criminal Defense",
      "Intellectual Property",
    ],
  },
  {
    category: "Health & Fitness",
    subcategories: [
      "Personal Training",
      "Yoga Classes",
      "Nutrition Advice",
      "Mental Wellness",
      "Group Fitness",
    ],
  },
  {
    category: "Event Planning",
    subcategories: [
      "Wedding Planning",
      "Birthday Party Coordination",
      "Corporate Events",
      "Conference Organizing",
      "Festival Planning",
    ],
  },
  {
    category: "Volunteer Work",
    subcategories: [
      "Community Outreach",
      "Environmental Initiatives",
      "Charity Events",
      "Elderly Care",
      "Homeless Shelter Support",
    ],
  },
  {
    category: "Technology Support",
    subcategories: [
      "IT Support",
      "Software Installation",
      "Website Development",
      "Cybersecurity",
      "Device Repair",
    ],
  },
  {
    category: "Creative Services",
    subcategories: [
      "Graphic Design",
      "Video Production",
      "Photography",
      "Writing & Editing",
      "Social Media Management",
    ],
  },
  {
    category: "Assistance for Soldiers",
    subcategories: [
      "Military Housing Assistance",
      "Veteran Care",
      "Military Legal Assistance",
      "Job Placement for Veterans",
      "Support for Active Duty",
    ],
  },
  {
    category: "Construction & Renovation",
    subcategories: [
      "Home Construction",
      "Kitchen Renovation",
      "Bathroom Renovation",
      "Roof Repair",
      "General Contracting",
    ],
  },
  {
    category: "Cleaning Services",
    subcategories: [
      "Carpet Cleaning",
      "Window Cleaning",
      "Pressure Washing",
      "Deep Cleaning",
      "Office Cleaning",
    ],
  },
  {
    category: "Gardening & Landscaping",
    subcategories: [
      "Lawn Care",
      "Landscape Design",
      "Tree Trimming",
      "Irrigation Systems",
      "Garden Maintenance",
    ],
  },
];

export interface Data {
  title: string;

  description: string;
  location: string[];
  serviceType: string[];
}

function Yourpost({ btnText }) {
  const [isPostExist, setIsPostExist] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<Data>({
    description: "",
    title: "",
    location: [],
    serviceType: [],
  });

  const navigate = useNavigate();
  const params = useParams();
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    arrayName: "location" | "serviceType" | null
  ) => {
    const { name, value, type, checked } = event.target;

    setData((prev) => {
      // אם prev[arrayName] הוא לא מערך, אתחיל אותו כ[].
      const currentArray = Array.isArray(prev[arrayName])
        ? prev[arrayName]
        : [];

      if (type === "checkbox") {
        // אם מדובר בצ'קאבוּק, נעדכן את המערך בהתאם אם נבדק או לא
        const updatedArray = checked
          ? [...currentArray, name] // אם נבדק, נוסיף
          : currentArray.filter((item) => item !== name); // אם לא נבדק, נסיר
        return {
          ...prev,
          [arrayName]: updatedArray,
        };
      }

      // אם מדובר בשדה טקסט, נעדכן את הערך של השדה הספציפי
      return {
        ...prev,
        [name]: value,
      };
    });
  };
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

  // const [formData, setFormData] = useState({
  //   bio: "",
  //   location: "",
  //   serviceType: [],
  // });

  // const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormData({ ...formData, location: e.target.value });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (btnText) {
      const queryString = new URLSearchParams(
        Object.entries(data).reduce((acc, [key, value]) => {
          acc[key] = Array.isArray(value) ? value.join(",") : value;
          return acc;
        }, {})
      ).toString();
      navigate(`/FilterPost?${queryString}`);
      // Example usage: append query to a URL

      console.log(queryString);
    } else {
      const respone = await createPost(data);
      if (respone.message === "Post successfully created") {
        navigate("/");
      }
    }
  };

  return (
    <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <MapAccordion
            arr={locations}
            setData={setData}
            name="location"
            handleInputChange={handleInputChange}
            data={data}
          />
        </div>

        <div>
          <MapAccordion
            arr={statuses}
            setData={setData}
            name="status"
            handleInputChange={handleInputChange}
            data={data}
          />
        </div>
        {btnText === undefined && (
          <div>
            <input
              name="description"
              type="text"
              placeholder="Description"
              onChange={(e) => handleInputChange(e, null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-700"
              required={isPostExist}
            />
          </div>
        )}
        <div>
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={(e) => handleInputChange(e, null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-700"
            required={isPostExist}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 bg-background text-foreground  shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Categories
          </button>
        </div>

        {isOpen && (
          <div className="mt-4">
            <Categories
              categories={categories}
              setData={setData}
              name="serviceType"
              handleInputChange={handleInputChange}
              data={data}
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            {btnText || "Add New Post"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Yourpost;
