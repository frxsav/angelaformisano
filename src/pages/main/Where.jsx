import React from "react";
import { motion as m } from "framer-motion";
import studio from "../../img/Studio.jpg";

function Where() {
  return (
    <>
      <div className="grid grid-cols-12 py-10">
        <m.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              opacity: { duration: 2 },
            },
          }}
          viewport={{ once: true }}
          className="col-start-2 col-span-4"
        >
          <img
            className="border border-black rounded where-frame"
            src="./images/Studio.jpg"
            alt="Studio"
            width="500px"
            height="500px"
          />
        </m.div>
        <m.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              opacity: { duration: 2 },
            },
          }}
          viewport={{ once: true }}
          className="col-start-8 col-span-4"
        >
          <h1 className="text-3xl font-semibold pb-4">Dove Sono?</h1>
          <span className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolores eligendi perspiciatis. Rem non earum vero. Corporis porro
            iusto, amet ratione quae voluptatum id accusantium aspernatur nisi
            itaque, veniam soluta.
          </span>
        </m.div>
      </div>
    </>
  );
}

export default Where;
