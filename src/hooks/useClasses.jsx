import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios(`/classes`);
            return res.data;
        }
    })
    return [classes, refetch]
};

export default useClasses;