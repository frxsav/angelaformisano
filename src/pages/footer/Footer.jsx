import React from "react";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import GoUp from "../../components/GoUp";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="grid grid-cols-12 px-10 pt-16 pb-5 bg-c-text text-c-outside"
        id="footer"
      >
        <section className="col-span-3 grid grid-rows-12">
          <div>
            <h6 className="text-3xl pb-2">{t("footer.where.title")}</h6>
            <address className="text-c-inside">
              {t("footer.where.street")}
              <br />
              {t("footer.where.building")}
              <br />
              {t("footer.where.city")}
            </address>
          </div>
        </section>
        <section className="col-span-3 grid grid-rows-12">
          <div>
            <h6 className="text-3xl pb-2">{t("footer.working_time.title")} </h6>
            <address className="text-c-inside">
              {" "}
              {t("footer.working_time.days")} <br />
              {t("footer.working_time.hours")}
            </address>
          </div>
        </section>
        <section className="col-span-3 grid grid-rows-12">
          <div>
            <h6 className="text-3xl pb-2"> {t("footer.contacts.title")} </h6>
            <address className="text-c-inside">
              {" "}
              {t("footer.contacts.email")} <br />{" "}
              {t("footer.contacts.phone_number")}{" "}
            </address>
          </div>
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
        <small className="text-c-inside col-span-4 pt-10 row-end-12 self-end">
          {t("footer.designer")}
        </small>
        <GoUp></GoUp>
      </div>
    </>
  );
};

export default Footer;
