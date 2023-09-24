import React from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
// import studio from "../../img/Studio.jpg";

function Where() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-12 py-10" id="where">
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
          className="col-start-3 col-span-4"
        >
          <img
            className="border border-black rounded where-frame"
            src="./images/Studio.jpg"
            alt="Studio"
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
          <section>
            <h6 className="text-4xl font-semibold pb-4">{t("where.title")}</h6>
            <address className="text-lg">
              {t("where.street")}
              <br />
              {t("where.building")}
              <br />
              {t("where.city")}
            </address>
          </section>
          <section>
            <h6 className="text-4xl font-semibold pt-10 pb-4">
              {t("where.working_time_title")}{" "}
            </h6>
            <address className="text-lg"> {t("where.working_time_dsc")} </address>
          </section>
        </m.div>
      </div>
    </>
  );
}

export default Where;
