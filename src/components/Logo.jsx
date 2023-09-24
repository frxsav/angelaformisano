import React from "react";
import logoimg from "../img/Logo.png"

function Logo() {
  return (
    <>
      <div className="col-span-2 col-start-2">
        <img src={logoimg} alt="Logo" width="90px" height="90px" />
      </div>
    </>
  );
}

export default Logo;
