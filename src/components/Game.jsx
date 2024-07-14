import React from "react";
const { useState } = React;

const Game = () => {
  const [score, setScore] = useState(10);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Welcome to the game</h1>
      <p>Current score: {score}</p>
      <button onClick={() => setScore(score + 1)}>+</button>
      <button onClick={() => setScore(0)}>reset</button>
      <button onClick={() => setScore(score - 1)}>-</button>
    </div>
  );
};

export default Game;
