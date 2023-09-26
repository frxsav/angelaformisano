import React from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";

function Visit() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-12 py-10" id="visit">
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
          className="lg:col-start-2 lg:col-span-4 col-span-12 lg:text-left text-center"
        >
          <h6 className="text-3xl lg:text-4xl font-semibold pb-5">
            {" "}
            {t("visit.title")}{" "}
          </h6>
          <small className="text-xl hidden lg:block"> {t("visit.dsc")} </small>
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
          className="lg:col-start-7 lg:col-span-5 col-span-12 p-5 lg:p-0"
        >
          <form className="grid grid-cols-12 col-span-6 gap-4">
            <input
              type="text"
              className="border border-c-text col-span-6 p-4"
              placeholder={t("visit.form.name")}
              required
              id="name"
            />
            <input
              type="text"
              className="border border-c-text col-span-6 p-4"
              placeholder={t("visit.form.surname")}
              required
              id="surname"
            />
            <input
              type="email"
              className="border border-c-text col-span-6 p-4"
              placeholder={t("visit.form.email")}
              required
              id="email"
            />

            <input
              type="tel"
              className="border border-c-text col-span-6 p-4"
              placeholder={t("visit.form.number")}
              id="phone"
            />

            <textarea
              className="border border-c-text col-span-12 p-4"
              placeholder={t("visit.form.your_message")}
              required
              id="message"
              cols="20"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-c-text text-c-inside border border-c-text rounded-lg col-span-12 py-2 text-2xl font-semibold hover:bg-c-outside hover:text-c-text hover:border-c-outside transition duration-300"
            >
              {t("visit.form.send")}
            </button>
          </form>
        </m.div>
      </div>
    </>
  );
}

export default Visit;
