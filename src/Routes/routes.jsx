import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import SignUp from "../Pages/SignUp/SignUp";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {path: "/", element: <Main/>, children: [
        {path: "*", element: <ErrorPage/>},
        {
            path: "/", element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
        {
            path: "/check-out/:id", element: <RequireAuth>
                <CheckOut />
            </RequireAuth>, loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: "/orders", element: <RequireAuth>
                <Orders />
            </RequireAuth>
        }
    ]}
])