import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const GoUp = () => {
  return (
    <>
      <div className="cursor-pointer border-c-blue bg-c-blue rounded-full text-c-inside fixed bottom-5 right-5 w-[50px] h-[50px] text-3xl flex justify-center transition duration-500">
        <a href="#" className="m-auto">
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </a>
      </div>
    </>
  );
};

export default GoUp;
