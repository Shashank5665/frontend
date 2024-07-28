import { lazy } from "react";
import paths from "./paths";

const One = () => lazy(() => import("./components/One"));
const Two = () => lazy(() => import("./components/Two"));
const Game = () => lazy(() => import("./components/Game"));

const routes = [
  { path: paths.one, component: <One /> },
  { path: paths.two, component: <Two /> },
  { path: paths.game, component: <Game /> },
  { path: paths.notFound, component: <p>Not Found</p> },
];

export default routes;
