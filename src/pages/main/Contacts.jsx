import React from "react";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import GoUp from "../../components/GoUp";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="grid grid-cols-12 px-10 py-16 bg-c-text text-c-outside"
        id="contacts"
      >
        <form className="grid grid-cols-12 col-span-6 gap-4">
          <input
            type="text"
            className="border border-c-text col-span-6 p-4"
            placeholder={t("contacts.name")}
            required
          />
          <input
            type="text"
            className="border border-c-text col-span-6 p-4"
            placeholder={t("contacts.surname")}
            required
          />
          <input
            type="email"
            className="border border-c-text col-span-6 p-4"
            placeholder={t("contacts.email")}
            required
          />

          <input
            type="tel"
            className="border border-c-text col-span-6 p-4"
            placeholder={t("contacts.number")}
            required
          />

          <textarea
            className="border border-c-text col-span-12 p-4"
            placeholder={t("contacts.your_message")}
            required
            cols="20"
            rows="5"
          ></textarea>
          <button className="bg-c-text text-c-outside border border-c-outside rounded-lg col-span-12 py-2 text-2xl font-semibold hover:bg-c-outside hover:text-c-text transition duration-300">
            {t("contacts.send")}
          </button>
        </form>
        <section className="col-span-3 col-start-8 grid grid-rows-12">
          <div>
            <h6 className="font-semibold text-4xl pb-4">
              {" "}
              {t("contacts.contact_me")}{" "}
            </h6>
            <address className="text-c-inside">
              {" "}
              {t("contacts.personal_email")} <br />{" "}
              {t("contacts.personal_phone")}{" "}
            </address>
          </div>

          <small className="text-c-inside row-end-12 self-end">
            {t("contacts.designer")}
          </small>
        </section>
        <section className="grid grid-cols-2 p-2">
          <a
            href="https://www.facebook.com/dott.ssaAngelaFormisano"
            target="_blank"
            rel="noreferrer"
            className="text-3xl cursor-pointer col-span-1"
          >
            <BsFacebook></BsFacebook>
          </a>
          <a
            href="https://www.instagram.com/fisioterapista_angela/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl cursor-pointer col-span-1"
          >
            <BsInstagram></BsInstagram>
          </a>
        </section>
        <GoUp></GoUp>
      </div>
    </>
  );
};

export default Contacts;
