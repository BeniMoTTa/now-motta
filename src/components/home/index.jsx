import React from "react";
import logoSite from "../../../src/Nu Kenzie.svg";
import imgRandom from "../../illustration.svg";
import "../home/home.css";

const Index = ({ setAccess }) => {
  return (
    <div className="container">
      <div className="container-general">
        <div className="text-div">
          <img src={logoSite} alt="" />
          <h2>Centralize o controle das suas finanças</h2>
          <span>de forma rápida e segura</span>
          <button className="btn-form" onClick={() => setAccess(true)}>
            Iniciar
          </button>
        </div>
        <div>
          <img src={imgRandom} alt="" className="img-home" />
        </div>
      </div>
    </div>
  );
};

export default Index;
