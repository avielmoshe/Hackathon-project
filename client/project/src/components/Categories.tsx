import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

function Categories() {
  return (
    <div>
      {categories.map((category) => {
        return (
          <Accordion type="single" collapsible>
            <AccordionItem key={category.category} value="item-1">
              <AccordionTrigger>{category.category}</AccordionTrigger>
              {
                <AccordionContent>
                  {category.subcategories.map((sub) => {
                    return (
                      <div key={sub}>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label htmlFor="vehicle1">{sub}</label>
                      </div>
                    );
                  })}
                </AccordionContent>
              }
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Categories;
