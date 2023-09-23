import React from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Collapse, initTE } from "tw-elements";

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
  const { t } = useTranslation();
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
          <h1 className="text-5xl font-semibold pb-2">
            {t("main.fisio_title")}
          </h1>
          <p className="text-2xl mb-5">{t("main.fisio_description")}</p>
          {therapies.map((th, index) => (
            <m.div
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
              viewport={{ once: true }}
              className="border-b"
            >
              <h2 className="mb-0" id={index}>
                <button
                  className="group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left font-semibold transition [overflow-anchor:none]"
                  type="button"
                  data-te-collapse-init
                  data-te-collapse-collapsed
                  data-te-target={"#open" + index}
                  aria-expanded="false"
                  aria-controls={index}
                >
                  {th.title}
                  <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                className="!visible hidden border-0"
                id={"open" + index}
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby={index}
              >
                <div className="px-8 pb-2">{th.description}</div>
              </div>
            </m.div>
          ))}
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
