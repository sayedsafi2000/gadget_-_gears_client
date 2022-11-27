import { createBrowserRouter } from "react-router-dom";
import AllCategory from "../Components/Banner/AllCategorys";
import Banner from "../Components/Banner/Banner";
import DisplayCategory from "../Components/Banner/DisplayCategory";
import Blog from "../Components/Blog/Blog";
import AllUsers from "../Components/DashBoard/AllUsers";
import Dashboard from "../Components/DashBoard/Dashboard";
import MyProduct from "../Components/DashBoard/MyProduct";
import Payment from "../Components/DashBoard/Payment";
import ReportedItem from "../Components/DashBoard/ReportedItem";
import SellerUser from "../Components/DashBoard/SellerUser";
import Error404 from "../Components/ErrorHandle/Error404";
import DashBoardLayout from "../Components/Layout/DashBoardLayout";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import BuyersRoute from "./BuyersRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><DisplayCategory></DisplayCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://gadget-and-gears-server.vercel.app/categories/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },

        ]

    },
    {
        path: "/dashboard",
        errorElement: <Error404></Error404>,
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard/myorder",
                element: <BuyersRoute><Dashboard></Dashboard></BuyersRoute>
            },
            {
                path: "/dashboard/allusers",
                errorElement: <Error404></Error404>,
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "/dashboard/seller",
                errorElement: <Error404></Error404>,
                element: <AdminRoute><SellerUser></SellerUser></AdminRoute>
            },
            
            {
                path: "/dashboard/addproduct",
                errorElement: <Error404></Error404>,
                element:<SellerRoute><AllCategory></AllCategory></SellerRoute>
            },
            {
                path: "/dashboard/report",
                errorElement: <Error404></Error404>,
                element:<AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },
            {
                path:"/dashboard/myproduct",
                errorElement: <Error404></Error404>,
                element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path:"/dashboard/payment/:id",
                element:<Payment></Payment>,
                loader:({params})=> fetch(`https://gadget-and-gears-server.vercel.app/bookings/${params.id}`)
            }
            
        ]
    }
])
export default router;