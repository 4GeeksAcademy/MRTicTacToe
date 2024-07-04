import React from "react";
import Menu from "./menu";
import Board from "./board";
import "../styles/index.css";

const TicTacToe = () => {
  return (
    <>
      <div className="container d-flex"></div>
      <div className=" col-12 Textalign mt-5">
        <h1>Tic Tac Toe in react.js!</h1>
      </div>
      <div className="col-12 Textalign mt-5">
        <Menu />
      </div>
      <div className="col-12 Textalign mt-5">
        <Board />
      </div>
    </>
  );
};

export default TicTacToe;
