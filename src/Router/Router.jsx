import { createBrowserRouter } from "react-router";
import MainRoot from "../Layouts/MainRoot";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainRoot></MainRoot>,
        children:[
            {
                index:true,
                element:<Home></Home>
            }
        ]
    }
])