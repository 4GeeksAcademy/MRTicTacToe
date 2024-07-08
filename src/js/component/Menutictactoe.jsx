import React, { useState } from "react";

const Menu = ({
  player1Name,
  player2Name,
  setPlayer1Name,
  setPlayer2Name,
  onStartGame,
}) => {
  const [error, setError] = useState("");

  const HandleStart = (weapon) => {
    if (!player1Name.trim() || !player2Name.trim()) {
      setError("Please fill both player names");
      return;
    }
    onStartGame(weapon);
  };

  return (
    <div className="container container-fluid">
      <div className="text-white text-center py-5">
        <h1>Tic Tac Toe in React.js</h1>
        <h2 className="pt-3">Pick a Weapon</h2>
      </div>
      <div className="initialmenu">
        <div className="container-inputs d-flex row justify-content-center text-center">
          <h2 className="col-12 text-white mt-5 mb-3">CHOOSE YOUR WEAPON</h2>
          <div className="players">
            <input
              type="text"
              placeholder="Player 1 Username"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
            />
            <input
              type="text"
              placeholder="Player 2 Username"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            className="buttonx col-1 justify-content-center mx-3 mt-3 mb-5"
            onClick={() => HandleStart("X")}
          >
            X
          </button>
          <button
            className="buttono col-1 justify-content-center mx-3 mt-3 mb-5"
            onClick={() => HandleStart("O")}
          >
            O
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
