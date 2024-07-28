import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import paths from "../paths";

const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link to={paths.home.one}>One</Link>
      <br />
      <Link to={paths.home.two}>Two</Link>
      <br />
      <Link to={paths.home.game.view(id)}>Game 1</Link>
      <br />
      <Outlet />
    </div>
  );
};

export default Home;
