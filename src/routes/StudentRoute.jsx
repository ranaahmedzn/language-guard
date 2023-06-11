import useAuthInfo from '../hooks/useAuthInfo';
import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../hooks/useUserRole';

const StudentRoute = ({children}) => {
    const { user, loading } = useAuthInfo()
    const location = useLocation()
    const [role, roleLoading] = useUserRole()

    if (loading || roleLoading) {
        return <h2 className="text-3xl font-bold text-center">Loading..</h2> //TODO: add loading page
    }

    if (user && role.isStudent) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default StudentRoute;