import { createBrowserRouter } from "react-router-dom";
import { Home, Planetas, Sol, Curiosities } from "../pages";
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
      {
        path: "/sol",
        element: <Sol />,
      },
      {
        path: "/curiosities",
        element: <Curiosities />,
      },
    ]
  }
]);