import React from "react";
import { motion as m } from "framer-motion";
import { Collapse, initTE } from "tw-elements";
import AccordionList from "../../components/Accordion/AccordionList";

initTE({ Collapse });

function Treatments() {
  const treatments = [
    { name: "Fisioterapia e riabilitazione" },
    { name: "Patologie del rachide" },
    { name: "Terapia strumentale" },
    { name: "Trattamenti di fisioestetica" },
    { name: "Massoterapia" },
    { name: "Terapia manuale" },
  ];
  return (
    <>
      <div className="grid grid-cols-12 py-10">
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "sprint",
              opacity: { duration: 0.5 },
              y: { duration: 0.8 },
            },
          }}
          viewport={{ once: true }}
          className="col-span-10 col-start-2 pb-10"
        >
          <AccordionList></AccordionList>
        </m.div>
        <ul className="col-start-3 col-span-8 grid grid-cols-6 gap-8 text-center">
          {treatments.map((tr, index) => (
            <m.li
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "sprint",
                  opacity: { duration: 0.5 },
                  y: { duration: 0.8 },
                },
              }}
              whileHover={{ scale: [null, 1.05, 1.05], y: -5 }}
              transition={{
                scale: { duration: 0.5 },
                y: { duration: 0.2 },
              }}
              viewport={{ once: true }}
              className="col-span-2 border-2 rounded border-c-blue text-3xl py-5 px-2 min-h-full font-semibold flex justify-center items-center"
            >
              <span>{tr.name}</span>
            </m.li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Treatments;
