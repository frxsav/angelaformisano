import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="col-span-1 col-end-12 self-center lg:hidden">
        <div
          className="flex flex-col absolute w-full m-0 right-0 px-5 pb-3 top-0 bg-c-text transition ease-in duration-300 text-inside"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-100%)",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <ul className="mt-20 h-full grid grid-rows-12 gap-3 border-t border-t-c-outside pt-5">
            <li className="row-span-1">
              <a
                href="#about"
                className="underline-animation"
                style={{ color: "var(--inside)" }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {t("navbar.about")}
              </a>
            </li>

            <li className="row-span-1">
              <a
                href="#treatments"
                className="underline-animation"
                style={{ color: "var(--inside)" }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {t("navbar.treatments")}
              </a>
            </li>

            <li className="row-span-1">
              <a
                href="#visit"
                className="underline-animation"
                style={{ color: "var(--inside)" }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {t("navbar.contacts")}
              </a>
            </li>
          </ul>
        </div>

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? "var(--outside)" : "var(--text)"}
          direction="right"
          className="z-10"
        />
      </div>
    </>
  );
};

export default BurgerMenu;
