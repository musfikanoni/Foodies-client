
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import LayOut from "../Layout/LayOut";
import AddFood from "../Pages/AddFood";
import Foods from "../Pages/Foods";
import ViewFoodDetails from "../Pages/ViewFoodDetails";
import AvailableFoods from "../Pages/AvailableFoods";
 
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <h1>ERROR 404</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                      path: "/",
                      element: <AvailableFoods></AvailableFoods>,
                      loader: () => fetch('http://localhost:5000/'),
                    }
                  ]
            },
            {
                path: "addfood",
                element: <AddFood></AddFood>
            },
            {
                path: "foods",
                element: <Foods></Foods>,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: 'foods/:id',
                element: <ViewFoodDetails></ViewFoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
            },
        ]
    }
  ])
