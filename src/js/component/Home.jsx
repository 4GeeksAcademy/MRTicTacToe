import React from "react";

//include images into your bundle

import Menu from "./menu";

//create your first component
const Home = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [weapon, setWeapon] = useState("null");
  const HandleStart = (selectedWeapon) => {
    setWeapon(selectedWeapon);
  };
  return (
    <div className="container">
      <div>
        <Menu
          player1Name={player1Name}
          player2Name={player2Name}
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
        />
      </div>
    </div>
  );
};

export default Home;
