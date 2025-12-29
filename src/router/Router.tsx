import { createBrowserRouter } from "react-router-dom";
// import { Source } from "../Source";
import { Home, Planetas } from "../pages";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
  },
  {
    path: "/planetas",
    element: <Planetas />,
  },
  {
    path: "/planetas/:planet",
    element: <Planetas />,
  },
]);