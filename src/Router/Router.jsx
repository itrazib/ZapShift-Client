import { createBrowserRouter } from "react-router";
import MainRoot from "../Layouts/MainRoot";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import SendPercel from "../Pages/SendPercel/SendPercel";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import MyPercels from "../Pages/Dashboard/MyPercels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";

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
            },
            {
                path:'/send_Percel',
                element:<PrivateRoute><SendPercel></SendPercel></PrivateRoute>,
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
            },
            {
                path:'/forgetPassword',
                element:<ForgetPassword></ForgetPassword>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'/dashboard/my-percels',
                element:<MyPercels></MyPercels>
            },
            {
                path:'/dashboard/payment/:percelId',
                element:<Payment></Payment>
            },
            {
                path:'/dashboard/payment-success',
                element:<PaymentSuccess></PaymentSuccess>
            },
            {
                path:'/dashboard/payment-cancelled',
                element:<PaymentCancelled></PaymentCancelled>
            }
        ]
    }
])