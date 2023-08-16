import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../Components";
import Homescreen from "../Pages/Homescreen";
import SignIn from "../Pages/AuthPages/SignIn";
import SignUp from "../Pages/AuthPages/SignUp";
import SingleRecipe from "../Pages/SingleRecipe";
import Dashboard from "../Components/Layout/Dashboard";
import NewRecipe from "../Pages/dashbpord/newRecipe";
import Recipies from "../Pages/Recipies";
import Contact from "../Pages/Contact";
import Restaurant from "../Pages/Restaurant";
import AllUsers from "../Pages/dashbpord/AllUsers";

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
      {
        path: "/recipies",
        element: <Recipies />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/search-restaurants",
        element: <Restaurant />,
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

  {
    path: "/new-recipe",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <NewRecipe />,
      },
      {
        path: "/new-recipe/all-users",
        element: <AllUsers />,
      },
    ],
  },
]);
