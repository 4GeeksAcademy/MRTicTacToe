import React, { useState } from "react";
import Menu from "./Menutictactoe";
import TicTacToe from "./TicTacToe";

const Home = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [weapon, setWeapon] = useState(null);

  const handleStart = (selectedWeapon) => {
    setWeapon(selectedWeapon);
  };

  return (
    <div className="container">
      {weapon ? (
        <TicTacToe
          player1Name={player1Name}
          player2Name={player2Name}
          weapon={weapon}
        />
      ) : (
        <Menu
          player1Name={player1Name}
          player2Name={player2Name}
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
          onStartGame={handleStart}
        />
      )}
    </div>
  );
};

export default Home;
