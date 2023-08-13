import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../Components";
import Homescreen from "../Pages/Homescreen";
import SignIn from "../Pages/AuthPages/SignIn";
import SignUp from "../Pages/AuthPages/SignUp";

export const main = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children: [
            {
                index: true,
                element: <Homescreen />
            }
        ]
    },
    {
        path:"/sign-in",
        element:<SignIn/>
    },
    {
        path:"/sign-up",
        element:<SignUp/>
    }
])