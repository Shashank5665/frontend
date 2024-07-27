import { Outlet, Routes } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Routes>
        <p>Header</p>
        <Outlet />
        <p>Footer</p>
      </Routes>
    </>
  );
}

export default App;
