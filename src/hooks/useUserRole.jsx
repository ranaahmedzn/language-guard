import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";

const useUserRole = () => {
    const {user, loading} = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const { data: role = {}, isLoading: roleLoading } = useQuery({
        queryKey: ['users', 'role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/role/${user.email}`);
            return res.data;
        }
    })
    return [role, roleLoading]
};

export default useUserRole;