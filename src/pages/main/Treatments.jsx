import React from "react";
import { motion as m } from "framer-motion";
import { Collapse, initTE } from "tw-elements";
import { useTranslation } from "react-i18next";

initTE({ Collapse });

function Treatments() {
  const { t } = useTranslation();
  const treatments = [
    {
      name: "Trattamenti di prevenzione",
      dsc: "Fondamentale per contrastare la comparsa di dolori e problemi posturali, con l'utilizzo di diversi trattamenti.",
    },
    {
      name: "Trattamenti posturali",
      dsc: "Per combattere l'insorgenza o la presenza attuale di posture scorrette attraverso l'esercizio terapeutico.",
    },
    {
      name: "Terapia fisica strumentale",
      dsc: "Con utilizzo di Tecarterapia, Ultrasuonoterapia e Terapia a Percussione.",
    },
    {
      name: "Fisioestetica",
      dsc: "Peeling biorivitalizzante per contrastare l'invecchiamento cutaneo, Linfodrenaggio manuale localizzato contro edemi e ritenzione idrica.",
    },
    {
      name: "Terapia manuale e Massoterapia",
      dsc: "Il massaggio è la principale forma di terapia manuale, riduce le tensioni e migliora la circolazione locale.",
    },
    {
      name: "Taping e Bendaggio funzionale",
      dsc: "Utilizzati per favorire il recupero da lesioni muscolo-scheletriche e articolari, o post infortunio.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-12 py-10 bg-c-text text-c-outside">
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
          className="col-span-12 pb-10"
        >
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
            <p className="text-5xl font-semibold pb-2 text-c-outside text-center pb-5">
              {t("treatments.title")}
            </p>
            <p className="text-3xl pt-3 text-center text-c-inside">
              {t("main.fisio_description")}
            </p>
          </m.div>
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
              className="col-span-2 border rounded border-c-outside p-2 min-h-fullflex justify-center items-center grid grid-cols-12"
            >
              <p className="col-span-12 text-3xl font-semibold pb-4">{tr.name}</p>
              <p className="col-span-12 text-c-inside text-lg">{tr.dsc}</p>
            </m.li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Treatments;
