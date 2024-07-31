import { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home/Home";

export const Routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Home />,
  },
];
