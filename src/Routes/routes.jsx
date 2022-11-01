import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {path: "/", element: <Main/>, children: [
        {path: "*", element: <ErrorPage/>},
        {
            path: "/", element: <Home/>
        }
    ]}
])