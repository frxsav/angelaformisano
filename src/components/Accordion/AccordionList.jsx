import React from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import AccordionItem from "./AccordionItem";

const AccordionList = () => {
  const { t } = useTranslation();
  const therapies = [
    { title: "Dolore muscoloscheletrico", description: "blablablablablabla" },
    { title: "Recupero post-operatorio", description: "blablablablablabla" },
    { title: "Infortuni sportivi", description: "blablablablablabla" },
    { title: "Problematiche posturali", description: "blablablablablabla" },
    { title: "Malattie croniche", description: "blablablablablabla" },
    {
      title: "Miglioramento della mobilità globale",
      description: "blablablablablabla",
    },
    {
      title: "Recupero da lesione traumatiche",
      description: "blablablablablabla",
    },
    { title: "Gestione dolore cronico", description: "blablablablablabla" },
    {
      title: "Promozione della salute e del benessere",
      description: "blablablablablabla",
    },
  ];
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
        <h1 className="text-5xl font-semibold pb-2">{t("main.fisio_title")}</h1>
        <p className="text-2xl mb-5">{t("main.fisio_description")}</p>
        <div className="grid grid-cols-12 py-4">
          {therapies.map((th) => (
            <AccordionItem item={th}></AccordionItem>
          ))}
        </div>
      </m.div>
    </>
  );
};

export default AccordionList;
