import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic Tac Toe in React.js</h1>
          <h2>Pick a weapon</h2>
        </div>
        <Weaponselection />
        <Reset />
        <Board />
      </div>
    );
  }
}

export default App;
