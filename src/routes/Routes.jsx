import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import GiveFeedback from "../pages/Dashboard/GiveFeedback/GiveFeedback";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            // student dashboard routes 
            {
                path: 'mySelectedClasses',
                element: <StudentRoute><MySelectedClasses /></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <StudentRoute><Payment /></StudentRoute>
            },
            {
                path: 'myEnrolledClasses',
                element: <StudentRoute><MyEnrolledClasses /></StudentRoute>
            },
            {
                path: 'paymentHistory',
                element: <StudentRoute><PaymentHistory /></StudentRoute>
            },
            {
                path: 'feedback',
                element: <StudentRoute><GiveFeedback /></StudentRoute>
            },

            // instructor dashboard routes 
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },

            // admin dashboard routes
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            }
        ]
    }
]);

export default router;