import React from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { motion as m } from "framer-motion";
import angela from "../../img/Angela.png";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid lg:grid-cols-12 lg:gap-4 py-10" id="about">
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
            <div className="separator-left mt-5"></div>
            <p className="text-2xl text-justify  mt-20 leading-8">
              <Trans
                i18nKey={"main.bio_description"}
                values={{ name: "Angela Formisano" }}
                components={{ b: <b /> }}
              />
            </p>
            <p className="text-lg text-justify pt-10 leading-6">
              <Trans
                i18nKey={"main.dsc_3"}
                components={{ i: <i /> }}
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
          <img src={angela} alt="Angela" width="600px" height="600px" />
        </m.div>
      </div>
    </>
  );
}

export default About;
