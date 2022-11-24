import { createBrowserRouter } from "react-router-dom";
import AllCategorys from "../Components/Banner/AllCategorys";
import AllCategory from "../Components/Banner/AllCategorys";
import Banner from "../Components/Banner/Banner";
import DisplayCategory from "../Components/Banner/DisplayCategory";
import Categories from "../Components/Categories/Categories";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Banner></Banner>
            },
            {
                path:"/service/:category",
                element:<DisplayCategory></DisplayCategory>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.category}`)
            },
            {
                path:"/addProducts",
                element:<AllCategorys></AllCategorys>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
           
        ]
        
    }
])
export default router;