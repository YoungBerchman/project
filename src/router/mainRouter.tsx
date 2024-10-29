import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Layout from "../layout/Layout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <HomeScreen />,
      },
    ],
  },
]);
