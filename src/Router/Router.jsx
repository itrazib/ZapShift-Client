import { createBrowserRouter } from "react-router";
import MainRoot from "../Layouts/MainRoot";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

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
    },
    {
        path:'/',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])