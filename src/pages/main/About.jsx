import React from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { motion as m } from "framer-motion";
// import angela from "../../img/Angela.png";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <article
        className="grid grid-cols-6 py-4 lg:grid-cols-12 lg:gap-4 lg:py-10"
        id="about"
      >
        <section className="col-span-6 lg:col-start-1 lg:col-span-5">
          <h1 className="text-4xl font-bold mb-2 text-center">
            {t("doctor.professional_name")}
          </h1>
        </section>

        <m.section
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
          className="col-span-6 lg:col-start-2 lg:col-span-5 lg:grid lg:grid-rows-9 order-2 lg:order-1"
        >
          <div className="row-start-1">
            <div className="separator-left mt-5 hidden lg:block"></div>
            <p className="text-xl text-justify lg:mt-20 leading-8 p-5 lg:p-0">
              <Trans
                i18nKey={"main.bio_description"}
                values={{ name: "Angela Formisano" }}
                components={{ b: <b /> }}
              />
            </p>
            <p className="text-lg text-justify lg:pt-10 leading-6 p-5 lg:p-0">
              <Trans i18nKey={"main.dsc_3"} components={{ i: <i /> }} />
            </p>
          </div>
        </m.section>
        <m.section
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
          className="col-span-6 m-5 lg:m-3 order-1 lg:col-end-12 lg:col-span-4 bg-c-blue lg:order-2 lg:m-0"
          style={{ borderRadius: "82% 18% 27% 73% / 100% 57% 43% 0% " }}
        >
          <figure>
            <img
              src="./images/Angela.png"
              alt="Dott.ssa Angela Formisano"
              title="Dott.ssa Angela Formisano"
              loading="eager"
              width="600px"
              height="600px"
            />
          </figure>
        </m.section>
      </article>
    </>
  );
}

export default About;
