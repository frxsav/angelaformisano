import React from "react";
import Logo from "./Logo";

function Navbar() {
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
              Chi Sono
            </a>
          </li>
          <li className="flex content-center text-justify">
            <a href="/" className="underline-animation">
              Trattamenti
            </a>
          </li>
          <li className="flex content-center text-justify">
            <a href="/" className="underline-animation">
              Contatti
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
