import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <h2 className="text-3xl font-bold text-center">Loading..</h2> //TODO: add loading page
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;