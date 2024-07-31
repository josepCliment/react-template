import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Routes } from "./constants/Routes";

const App = () => {
  const router = createBrowserRouter(Routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
