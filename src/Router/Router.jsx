
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import LayOut from "../Layout/LayOut";
import AddFood from "../Pages/AddFood";
 
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <h1>ERROR 404</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "addfood",
                element: <AddFood></AddFood>
            }
        ]
    }
  ])
