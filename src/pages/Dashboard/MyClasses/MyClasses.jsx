import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClasses = () => {
    const {user, loading} = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${user.email}`);
            return res.data;
        }
    })
    console.log(classes)
    return (
        <div>
            <h2>My Total Classes: ${classes.length}</h2>
        </div>
    );
};

export default MyClasses;