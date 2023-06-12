import { useQuery } from "@tanstack/react-query";
import Instructor from "./Instructor";
import axios from "axios";
import useThemeContext from "../../../hooks/useThemeContext";

const PopularInstructors = () => {
    const { data: popularInstructors = [] } = useQuery({
        queryKey: ['popular-instructors'],
        queryFn: async () => {
            const res = await axios(`/popular-instructors`);
            return res.data;
        }
    })
    const { theme } = useThemeContext()

    return (
        <div className="px-4 md:px-0 md:pt-10 md:pb-20">
            <div className="text-center w-full md:w-2/3 lg:w-2/4 mx-auto space-y-5 mb-10">
                <h2 className={`text-3xl font-bold ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Meet our top Instructors</h2>
                <p className={`${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>Unveiling the Masters of Language Education: Get Inspired by the Unparalleled Expertise, Passion, and Teaching Excellence of our Top Instructors</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    popularInstructors.map(instructor => <Instructor
                    key={instructor._id}
                    instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>
)};

export default PopularInstructors;