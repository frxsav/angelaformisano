import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";

const GoUp = () => {
  const [offset, setOffset] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
  }, []);
  const opacity1 = {
    opacity: 1,
  };
  const opacity0 = {
    opacity: 0,
  };
  return (
    <>
      <div
        className="cursor-pointer border-c-blue bg-c-blue rounded-full text-c-inside fixed bottom-5 right-5 w-[50px] h-[50px] text-3xl flex justify-center transition duration-500"
        style={offset > 100 ? opacity1 : opacity0}
      >
        <button
          className="m-auto"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </button>
      </div>
    </>
  );
};

export default GoUp;
