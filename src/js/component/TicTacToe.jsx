import React, { useState } from "react";
import Board from "./board";

const TicTacToe = ({ player1Name, player2Name, weapon }) => {
  const [winner, setWinner] = useState(null);
  const [playerXTurn, setPlayerXturn] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const resetGame = () => {
    setWinner(null);
    setPlayerXturn(true);
    setSquares(Array(9).fill(null));
  };
  const handleSquare = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = playerXTurn ? "X" : "O";
    setSquares(newSquares);
    if (calculateWinner(newSquares)) {
      setWinner(playerXTurn ? player1Name : player2Name);
    } else {
      setPlayerXturn(!playerXTurn);
    }
  };
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <>
      <div className="text-white text-center py-5">
        <h1>Tic Tac Toe in React.js</h1>
        <h3 className="Textalign ">
          {winner
            ? `${winner} Wins!`
            : `It's ${playerXTurn ? player1Name : player2Name}'s turn`}
        </h3>
        <button
          onClick={resetGame}
          className="justify-content-center align-items-center"
        >
          Reset
        </button>
        <Board squares={squares} onClick={handleSquare} />
      </div>
    </>
  );
};

export default TicTacToe;
