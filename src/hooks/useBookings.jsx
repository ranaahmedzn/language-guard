import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "./useAuthInfo";
import useAxiosSecure from "./useAxiosSecure";

const useBookings = () => {
    const { user, loading } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()
    // console.log(!!user, !loading)

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/bookings?email=${user?.email}`)
            return res.data
        },
    })
    return [bookings, refetch]
};

export default useBookings;