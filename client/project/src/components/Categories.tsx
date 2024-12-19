import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Data } from "@/pages/Yourpost";

interface Category {
  category: string;
  subcategories: string[];
}

interface PropsType {
  categories: Category[];
  name: "serviceType";
  setData: any;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    arrayName: "serviceType"
  ) => void;
  data: Data;
}

function Categories({
  categories,
  name,
  setData,
  handleInputChange,
  data,
}: PropsType) {
  return (
    <div>
      {categories.map((category) => {
        return (
          <Accordion key={category.category} type="single" collapsible>
            <AccordionItem key={category.category} value="item-1">
              <AccordionTrigger>{category.category}</AccordionTrigger>
              {
                <AccordionContent className="">
                  {category.subcategories.map((sub) => {
                    return (
                      <div key={sub}>
                        <input
                          type="checkbox"
                          id={sub}
                          name={sub}
                          value={sub}
                          onChange={(e) => handleInputChange(e, name)} // עדכון מצב הבחירה
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
