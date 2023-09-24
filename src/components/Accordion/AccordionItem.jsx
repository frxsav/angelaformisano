import React from "react";
import { HiChevronDown } from "react-icons/hi";

const AccordionItem = ({ item }) => {
  return (
    <>
      <div className="relative col-span-10 col-start-2 overflow-hidden border-b mb-2">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="flex items-center pl-5 py-1">
          <h1 className="text-xl font-semibold">{item.title}</h1>
        </div>
        <div className="absolute top-3 right-3 transition-transform duration-500 ease-in rotate-0 peer-checked:rotate-180">
          <HiChevronDown></HiChevronDown>
        </div>
        <div className="overflow-hidden transition-all duration-500 ease-in max-h-0 peer-checked:max-h-40">
          <div className="py-4">
            <p className="pl-10">{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
