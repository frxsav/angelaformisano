import React from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { motion as m } from "framer-motion";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid lg:grid-cols-12 lg:gap-4 py-10">
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
          className="col-start-2 col-span-5 lg:grid grid-rows-9"
        >
          <div className="row-start-1">
            <h1 className="text-5xl font-bold mb-2">
              {t("doctor.professional_name")}
            </h1>
            <span className="text-4xl italic"> {t("doctor.profession")}</span>
          </div>
          <div className="lg:row-start-2 md:row-start-8">
            <p className="text-4xl underline decoration-1 underline-offset-4 pl-3 pb-3 border-l-4 border-l-c-blue">
              {t("main.bio_title")}
            </p>
            <p className="text-xl text-justify border-l-4 border-l-c-blue pl-3">
              <Trans
                i18nKey={"main.bio_description"}
                defaults="La dott.ssa {{name}} lavora dal 2019 con passione ed amore per il proprio lavoro, mettendo il benessere del paziente al centro del percorso riabilitativo, seguendone i risultati anche a distanza."
                values={{ name: "Angela Formisano" }}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.2,
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
          className="col-end-12 col-span-4 bg-c-blue"
          style={{ borderRadius: "82% 18% 27% 73% / 100% 57% 43% 0% " }}
        >
          <img
            src="./images/Angela.png"
            alt="Angela"
            width="600px"
            height="600px"
          />
        </m.div>
      </div>
    </>
  );
}

export default About;
