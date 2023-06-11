import { Navigate, useLocation } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";
import useUserRole from "../hooks/useUserRole";

const AdminRoute = ({children}) => {
    const { user, loading } = useAuthInfo()
    const location = useLocation()
    const [role, roleLoading] = useUserRole()

    if (loading || roleLoading) {
        return <h2 className="text-3xl font-bold text-center">Loading..</h2> //TODO: add loading page
    }

    if (user && role.isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default AdminRoute;