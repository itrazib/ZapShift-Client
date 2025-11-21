import { createBrowserRouter } from "react-router";
import MainRoot from "../Layouts/MainRoot";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainRoot></MainRoot>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/coverage',
                element:<Coverage></Coverage>,
                loader: () => fetch('/public/service-center.json').then(res => res.json())
            }
        ]
    }
])