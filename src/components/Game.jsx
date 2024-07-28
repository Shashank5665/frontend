import React from "react";
import { useParams } from "react-router-dom";

const Game = () => {
  const { id } = useParams();

  return <p>This is game number {id}</p>;
};

export default Game;
