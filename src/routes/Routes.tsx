import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../Components";
import Homescreen from "../Pages/Homescreen";
import SignIn from "../Pages/AuthPages/SignIn";
import SignUp from "../Pages/AuthPages/SignUp";
import SingleRecipe from "../Pages/SingleRecipe";
import Dashboard from "../Components/Layout/Dashboard";
import NewRecipe from "../Pages/dashbpord/newRecipe";

export const main = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
      {
        path: "/recipe/:id",
        element: <SingleRecipe />,
      },
    ],
  },
  {
    path: "/new-recipe",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <NewRecipe />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
