import React from "react";
import Logo from "../../components/Logo";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <nav
        className="grid grid-cols-12"
        style={{ borderBottom: "1px solid c-outside" }}
      >
        <Logo></Logo>
        <ul className="col-start-8 flex self-center whitespace-nowrap">
          <li className="flex content-center text-justify">
            <a href="/" className="underline-animation">
            {t("navbar.about")}
            </a>
          </li>
          <li className="flex content-center text-justify">
            <a href="/" className="underline-animation">
            {t("navbar.treatments")}
            </a>
          </li>
          <li className="flex content-center text-justify">
            <a href="/" className="underline-animation">
            {t("navbar.contacts")}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
