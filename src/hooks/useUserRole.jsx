import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useUserRole = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: role = {}, isLoading: roleLoading, refetch } = useQuery({
        queryKey: ['users', 'role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/role/${user?.email}`);
            return res.data;
        }
    })
    return [role, roleLoading, refetch]
};

export default useUserRole;