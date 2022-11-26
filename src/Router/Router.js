import { createBrowserRouter } from "react-router-dom";
import AllCategorys from "../Components/Banner/AllCategorys";
import AllCategory from "../Components/Banner/AllCategorys";
import Banner from "../Components/Banner/Banner";
import DisplayCategory from "../Components/Banner/DisplayCategory";
import Blog from "../Components/Blog/Blog";
import Categories from "../Components/Categories/Categories";
import AllUsers from "../Components/DashBoard/AllUsers";
import Dashboard from "../Components/DashBoard/Dashboard";
import Error404 from "../Components/ErrorHandle/Error404";
import DashBoardLayout from "../Components/Layout/DashBoardLayout";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import SharedRouter from "./SharedRouter";
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
                path: "/service/:category",
                element: <PrivateRoute><DisplayCategory></DisplayCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)
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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            
            {
                path: "/dashboard/addproduct",
                element:<SellerRoute><AllCategory></AllCategory></SellerRoute>
            },
            
        ]
    }
])
export default router;