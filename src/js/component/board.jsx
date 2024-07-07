import { array } from "prop-types";
import React, { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(array(9).fill(null));
  const [playerXTurn, setPlayerXturn] = useState(true);

  const handleClick = (index) => {
    setSquares((prevSquares) => {
      if (calculateWinner(prevSquares) || prevSquares[index]) {
        return prevSquares;
      }
      const newSquares = prevSquares.map((square, i) => {
        if (i === index) {
          return playerXturn ? "X" : "O";
        }

        return square;
      });
      setPlayerXturn(!playerXTurn);
      return newSquares;
    });
  };
};
export default Board;
