import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
// import PrivateRoute from "./PrivateRoute";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

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
                element: <Instructors />
            },
            {
                path: "/classes",
                element: <Classes />
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
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            // student dashboard routes 
            {
                path: 'mySelectedClasses',
                element: <MySelectedClasses />
            },
            {
                path: 'payment/:id',
                element: <Payment />
            },
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClasses />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },
        ]
    }
    
]);

export default router;