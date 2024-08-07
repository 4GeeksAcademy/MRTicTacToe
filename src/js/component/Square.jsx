import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button className="square color" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
