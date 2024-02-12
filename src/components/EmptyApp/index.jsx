import React from "react";
import "../EmptyApp/empty.css";
import { GiChest } from "react-icons/gi";

const EmptyList = () => {
  return (
    <div className="emptyDirect">
      <div className="emptyDirectIcon">
        <p>Você ainda não possui nenhum lançamento</p>
        <GiChest className="chestIcon" />
      </div>
      <div className="emptyApp">
        <span className="emptySquare">a</span>
        <span className="emptySquare2">a</span>
      </div>
      <div className="emptyApp">
        <span className="emptySquare">a</span>
        <span className="emptySquare2">a</span>
      </div>
      <div className="emptyApp">
        <span className="emptySquare">a</span>
        <span className="emptySquare2">a</span>
      </div>
    </div>
  );
};

export default EmptyList;
