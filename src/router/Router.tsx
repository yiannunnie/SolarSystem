import { createBrowserRouter } from "react-router-dom";
import { Home, Planetas } from "../pages";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ]
  }
]);