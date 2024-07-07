import React from "react";
import Menu from "./menu";
import Board from "./board";

const TicTacToe = () => {
  return (
    <>
      <div className="container d-flex">
        <Menu />
        <Board />
      </div>
    </>
  );
};

export default TicTacToe;
