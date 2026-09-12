import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Category from "../components/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {index:true, element: <Home></Home>},
            {
                path:"categories/:id", 
                element: <Category></Category>,
                loader: ()=> fetch('/news.json')
            }

        ]
    }
])