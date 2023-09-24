import React from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";

const AccordionList = () => {
  const { t } = useTranslation();

  return (
    <>
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
        <h1 className="text-5xl font-semibold pb-2 text-c-blue text-center pb-5">
          {t("treatments.title")}
        </h1>
        <p className="text-3xl pt-3 text-center text-c-inside">
          {t("main.fisio_description")}
        </p>
      </m.div>
    </>
  );
};

export default AccordionList;
