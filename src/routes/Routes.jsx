import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/instructors",
                element: <PrivateRoute><h2 className="text-3xl font-bold text-center">Instructors page</h2></PrivateRoute> //TODO: add loading page
            },
            {
                path: "/classes",
                element: <PrivateRoute><h2 className="text-3xl font-bold text-center">Classes page</h2></PrivateRoute> //TODO: add loading page
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    }
]);

export default router;