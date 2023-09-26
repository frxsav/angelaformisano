import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselList = ({ treatments }) => {
  return (
    <>
      <Carousel showArrows={false} showStatus={false}>
        {treatments.map((tr, index) => (
          <div
            className="border rounded border-c-outside px-2 py-3 mx-10 mb-10 min-h-[150px] max-h-[180px]"
            key={index}
          >
            <p className="text-2xl font-semibold pb-4">{tr.name}</p>
            <p className="text-c-inside text-md">{tr.dsc}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselList;
