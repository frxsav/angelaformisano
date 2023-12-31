import React from "react";
import Logo from "../../components/Logo";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

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
            <a href="#visit" className="underline-animation">
              {t("navbar.where")}
            </a>
          </li>

          <li className="flex content-center text-justify">
            <a href="#footer" className="underline-animation">
              {t("navbar.contacts")}
            </a>
          </li>
        </ul>
        <BurgerMenu></BurgerMenu>
      </nav>
    </>
  );
}

export default Navbar;
