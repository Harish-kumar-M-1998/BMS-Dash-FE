import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../views//Dashboardcomp/Dashboard";
import HomeLayout from "../layout/homeLayout";

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
    element: <h1>Page Not Found</h1>,
  },
]);
