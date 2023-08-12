import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../Components";
import Homescreen from "../Pages/Homescreen";

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
    }
])