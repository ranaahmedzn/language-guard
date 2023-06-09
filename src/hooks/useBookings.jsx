import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useBookings = () => {
    //TODO: create useAuth & axiosSecure hook
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`/bookings?email=${user?.email}`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            return res.data
        },
    })
    return [bookings, refetch]
};

export default useBookings;