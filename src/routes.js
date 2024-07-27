import { lazy } from "react";
import paths from "./paths";

const One = () => lazy(() => import("./components/One"));
const Two = () => lazy(() => import("./components/Two"));

const routes = [
  { path: paths.one, component: <One /> },
  { path: paths.two, component: <Two /> },
];

export default routes;
