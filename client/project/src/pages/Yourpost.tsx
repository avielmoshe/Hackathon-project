import Categories from "@/components/Categories";
import MapAccordion from "@/components/MapAccordion";
import { Button } from "@/components/ui/button";
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

function Yourpost() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MapAccordion
          arr={locations}
          setData={setData}
          name="location"
          handleInputChange={handleInputChange}
          data={data}
        />
        <MapAccordion
          arr={statuses}
          setData={setData}
          name="status"
          handleInputChange={handleInputChange}
          data={data}
        />
        <input
          name="description"
          type="text"
          placeholder="description"
          // value={formData.email}
          onChange={(e) => handleInputChange(e, null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required={isPostExist}
        />

        <input
          name="title"
          type="text"
          placeholder="title"
          // value={formData.email}
          // onChange={description}
          onChange={(e) => handleInputChange(e, null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required={isPostExist}
        />

        <Button type="button" onClick={() => setIsOpen(!isOpen)}>
          categories
        </Button>

        {isOpen && (
          <Categories
            categories={categories}
            setData={setData}
            name="serviceType"
            handleInputChange={handleInputChange}
            data={data}
          />
        )}

        <Button type="submit"> search</Button>
      </form>
    </div>
  );
}

export default Yourpost;
