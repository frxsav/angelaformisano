import React from "react";
import Logo from "../../components/Logo";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <nav className="grid grid-cols-12">
        <Logo></Logo>
        <ul className="hidden lg:flex col-start-9 self-center whitespace-nowrap">
          <li className="flex content-center text-justify">
            <a href="#treatments" className="underline-animation">
              {t("navbar.treatments")}
            </a>
          </li>
          <li className="flex content-center text-justify">
            <a href="#where" className="underline-animation">
              {t("navbar.where")}
            </a>
          </li>

          <li className="flex content-center text-justify">
            <a href="#contacts" className="underline-animation">
              {t("navbar.contacts")}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
