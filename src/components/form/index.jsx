import React, { useState } from "react";
import cifrao from "../form/R$.jpg";
import "../form/form.css";

const Form = ({ setCash }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setType] = useState("");

  const types = [
    { id: 1, name: "Entrada" },
    { id: 2, name: "Despesa" },
  ];

  function stepForm(event) {
    event.preventDefault();

    const cash = {
      description,
      value,
      typeValue,
    };

    setCash((oldValue) => [...oldValue, cash]);
    setDescription("");
    setValue("");
    setType("");
  }

  return (
    <form className="form-area" onSubmit={stepForm}>
      <h6>Descrição</h6>
      <input
        value={description}
        type="text"
        placeholder="Digite aqui sua descrição"
        className="input-general"
        onChange={(event) => setDescription(event.target.value)}
      />
      <span>Ex: Compra de roupas</span>
      <div className="align-values">
        <div className="value-area">
          <h6>Valor</h6>
          <div className="area-numbers">
            <input
              value={value}
              type="number"
              placeholder="1"
              onChange={(event) => setValue(event.target.value)}
            />
            <img src={cifrao} alt="" className="img-money" />
          </div>
        </div>
        <div className="type-value-area">
          <h6>Tipo de Valor</h6>
          <select
            value={typeValue}
            id="typeChoose"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="choose" id="0" hidden>
              Escolha o tipo
            </option>
            {types.map((type) => (
              <option value={type.name}> {type.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="btn-insert" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
