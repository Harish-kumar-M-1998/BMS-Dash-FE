import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../views//Dashboardcomp/Dashboard";
import HomeLayout from "../layout/homeLayout";
import NotFound from "../utils/NotFound";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
