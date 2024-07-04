import React from "react";

const Data = ({
  player1Name,
  player2Name,
  winner,
  xIsNext,
  startWithX,
  setStartWithX,
  setPlayer1Name,
  setPlayer2Name,
}) => {
  const handleStartChange = (event) => {
    setStartWithX(event.target.value === "X");
  };

  const handlePlayer1NameChange = (event) => {
    setPlayer1Name(event.target.value);
  };

  const handlePlayer2NameChange = (event) => {
    setPlayer2Name(event.target.value);
  };

  const currentPlayer = xIsNext ? player1Name : player2Name;

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + currentPlayer;
  }

  return (
    <div>
      <div>{status}</div>
      <div>
        <label>
          Start with:
          <select value={startWithX ? "X" : "O"} onChange={handleStartChange}>
            <option value="X">X</option>
            <option value="O">O</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Player 1 Name:
          <input
            type="text"
            value={player1Name}
            onChange={handlePlayer1NameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Player 2 Name:
          <input
            type="text"
            value={player2Name}
            onChange={handlePlayer2NameChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Data;
