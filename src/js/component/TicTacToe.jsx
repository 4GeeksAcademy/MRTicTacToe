import React, { useState } from "react";
import Board from "./board";

const TicTacToe = ({ player1Name, player2Name, weapon }) => {
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
