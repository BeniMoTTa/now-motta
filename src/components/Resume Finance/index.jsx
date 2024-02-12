import React from "react";
import Trash from "../Resume Finance/trash.png";
import "../Resume Finance/finance.css";

const Finance = ({ description, value, typeValue, handlerRemove }) => {
  if (typeValue === "Entrada") {
    return (
      <li className="positive-type">
        <div>
          <h5>{description}</h5>
          <span>{typeValue}</span>
        </div>
        <div className="value-user">
          <span>R${value},00</span>
          <button onClick={handlerRemove}>
            <img src={Trash} alt="" />
          </button>
        </div>
      </li>
    );
  }
  return (
    <li className="negative-type">
      <div>
        <h5>{description}</h5>
        <span>{typeValue}</span>
      </div>
      <div className="value-user">
        <span>R${-value},00</span>
        <button onClick={handlerRemove}>
          <img src={Trash} alt="" />
        </button>
      </div>
    </li>
  );
};

export default Finance;
