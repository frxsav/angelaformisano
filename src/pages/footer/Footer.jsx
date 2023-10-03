import React from "react";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import GoUp from "../../components/GoUp";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="grid grid-cols-12 px-5 lg:px-10 pt-5 lg:pt-16 pb-5 bg-c-text text-c-outside"
        id="footer"
      >
        <section className="col-span-5 lg:col-span-3 grid grid-rows-12">
          <div>
            <h3 className="text-2xl lg:text-3xl pb-2">
              {t("footer.where.title")}
            </h3>
            <address className="text-c-inside text-sm">
              {t("footer.where.street")}
              <br />
              {t("footer.where.building")}
              <br />
              {t("footer.where.city")}
            </address>
          </div>
        </section>
        <section className="col-span-6 col-start-7 lg:col-span-3 grid grid-rows-12">
          <div>
            <h3 className="text-2xl lg:text-3xl pb-2">
              {t("footer.working_time.title")}{" "}
            </h3>
            <address className="text-c-inside text-sm">
              {t("footer.working_time.days")} <br />
              {t("footer.working_time.hours")}
            </address>
          </div>
        </section>
        <section className="col-span-5 lg:col-span-3 pt-4 lg:pt-0 grid grid-rows-12">
          <div>
            <h3 className="text-2xl lg:text-3xl pb-2">
              {" "}
              {t("footer.contacts.title")}{" "}
            </h3>
            <address className="text-c-inside text-sm">
              {" "}
              {t("footer.contacts.email")} <br />{" "}
              {t("footer.contacts.phone_number")}{" "}
            </address>
          </div>
        </section>
        <section className="grid grid-cols-2 p-2 col-span-3 col-start-9 lg:col-span-1 lg:gap-0 lg:pt-0 gap-8 pt-4">
          <a
            href="https://www.facebook.com/dott.ssaAngelaFormisano"
            target="_blank"
            rel="noreferrer"
            className="text-2xl lg:text-3xl cursor-pointer col-span-1"
          >
            <BsFacebook></BsFacebook>
          </a>
          <a
            href="https://www.instagram.com/fisioterapista_angela/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl lg:text-3xl cursor-pointer col-span-1"
          >
            <BsInstagram></BsInstagram>
          </a>
        </section>
        <small className="text-c-inside lg:border-none border-t border-t-c-outside col-span-12 lg:col-span-4 pt-2 mt-8 row-end-12 lg:self-end">
          {t("footer.designer")}
        </small>
        <div className="hidden lg:block">
          <GoUp></GoUp>
        </div>
      </div>
    </>
  );
};

export default Footer;
