import React from "react";
import logoHeader from "../header/Nu Kenzie.svg";
import "../header/header.css";

const HeaderUp = ({ setAccess }) => {
  return (
    <div className="header-direct">
      <div>
        <img src={logoHeader} alt="" />
        <button className="back-home" onClick={() => setAccess(false)}>
          Início
        </button>
      </div>
    </div>
  );
};

export default HeaderUp;
