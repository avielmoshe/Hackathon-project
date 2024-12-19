import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Data } from "@/pages/Yourpost";
import { useState } from "react";

interface PropsType {
  arr: string[];
  name: "location" | "serviceType" | "status";
  setData: any;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    arrayName: "location" | "serviceType"
  ) => void;
  data: Data;
}

function MapAccordion({
  arr,
  name,
  setData,
  handleInputChange,
  data,
}: PropsType) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  //   // פונקציה לעדכון מצב הבחירה של ה-checkbox
  //   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = event.target.value;
  //     setData((prevState) =>
  //       prevState.includes(value)
  //         ? prevState.filter((item) => item !== value)
  //         : [...prevState, value]
  //     );
  //   };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>
          {arr.map((element) => (
            <div key={element}>
              <input
                type="checkbox"
                id={element}
                name={element}
                value={element}
                // checked={data[name].includes(element)} // מצב הבחירה
                onChange={(e) => handleInputChange(e, name)} // עדכון מצב הבחירה
              />
              <label htmlFor={element}>{element}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default MapAccordion;
