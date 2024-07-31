import { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import EditUser from "../components/pages/Users/EditUser";

export const Routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/user/:id',
    element: <EditUser />
  }
];
