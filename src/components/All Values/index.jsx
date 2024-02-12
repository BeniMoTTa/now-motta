import React from "react";
import "../All Values/allValue.css";

const sumValues = ({ cash }) => {
  return (
    <div className="area-insert-values">
      <div className="sum-values">
        <div>
          <p>Valor total:</p>
          <span>
            ${" "}
            {cash.reduce((previousValue, currentValue) => {
              return currentValue.typeValue === "Entrada"
                ? currentValue.value * 1 + previousValue
                : previousValue - currentValue.value * 1;
            }, 0)}
            ,00
          </span>
        </div>
        <span className="text-sum">O valor se refere ao saldo</span>
      </div>
    </div>
  );
};

export default sumValues;
