import useAuthInfo from '../hooks/useAuthInfo';
import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../hooks/useUserRole';
import Loading from '../pages/Loading/Loading';

const StudentRoute = ({children}) => {
    const { user, loading } = useAuthInfo()
    const location = useLocation()
    const [role, roleLoading] = useUserRole()

    if (loading || roleLoading) {
        return <Loading />
    }

    if (user && role.isStudent) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default StudentRoute;