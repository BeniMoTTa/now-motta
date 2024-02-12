import React, { useState } from "react";
import HeaderSite from "../header";
import Forme from "../form";
import Finance from "../Resume Finance";
import AllValues from "../All Values";
import EmptyList from "../EmptyApp";
import "./enterSite.css";
// import { GiCarDoor } from "react-icons/gi";

const ControlFinance = ({ setAccess }) => {
  const [cash, setCash] = useState([]);
  const [filter, setFilters] = useState("Todos");

  const filtered = cash.filter((element) => {
    if (filter === "Todos") {
      return true;
    } else {
      return element.typeValue === filter;
    }
  });

  function handlerRemove(data) {
    const filteredCard = cash.filter((element) => element.description !== data);
    setCash(filteredCard);
  }
  return (
    <div className="container-main">
      <div>
        <HeaderSite setAccess={setAccess} />
      </div>
      <div className="allign-enter">
        <div className="container-area">
          <Forme setCash={setCash} />
          {filtered.length !== 0 && <AllValues cash={cash} />}
        </div>
        <div className="container-finance">
          <div className="nav-interation">
            <h6>Resumo financeiro</h6>
            <div>
              <button className="btn-nav" onClick={() => setFilters("Todos")}>
                Todos
              </button>
              <button className="btn-nav" onClick={() => setFilters("Entrada")}>
                Entradas
              </button>
              <button className="btn-nav" onClick={() => setFilters("Despesa")}>
                Despesas
              </button>
            </div>
          </div>
          <ul className="list-finance">
            {filtered.map((element, index) => (
              <Finance
                key={index}
                description={element.description}
                value={element.value}
                typeValue={element.typeValue}
                handlerRemove={() => handlerRemove(element.description)}
              />
            ))}
          </ul>
          {filtered.length === 0 && <EmptyList />}
        </div>
      </div>
    </div>
  );
};

export default ControlFinance;
