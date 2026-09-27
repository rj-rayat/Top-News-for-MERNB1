import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Category from "../components/Category";
import HomeLayout from "../layout/HomeLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Details from "../components/Details";
import Private from "../private/Private";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {path:"", element: <Home></Home>},
            {
                path:"categories/:id", 
                element: <Category></Category>,
                loader: ()=> fetch('/news.json')
            },
           

        ],



        
    },

    {
                path: "/login", 
                element: <Login></Login>,
                
            },
            {
                path: "/register", 
                element: <Register></Register>,
                
    },

    {
        path: "/news/:id",
        element: <Private><Details></Details></Private>,
        loader: ()=> fetch('/news.json')
    }
])