import React from "react";

const winner = verifyWinner(squares);
let status;
if (winner) {
  status = `The Winner is ${winner}`;
} else {
  status = `${playerXTurn ? "X" : "O"} turn!`;
}
