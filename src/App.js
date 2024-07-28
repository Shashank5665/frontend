import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import One from "./components/One";
import Two from "./components/Two";
import Game from "./components/Game";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "one", element: <One /> },
      { path: "two", element: <Two /> },
      { path: "game/:id", element: <Game /> },
      { path: "*", element: <p>Not Found</p> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
