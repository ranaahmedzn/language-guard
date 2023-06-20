import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../hooks/useAuthInfo";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const MyEnrolledClasses = () => {
    const { user, loading } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolled-classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled-classes?email=${user?.email}`)
            return res.data
        },
    })

    return (
        <div>
            <Helmet>
                <title>Enrolled Classes - Language Guard</title>
            </Helmet>
            <DashboardNav name="Enrolled Classes" number={enrolledClasses.length} />
            <div className="relative overflow-x-auto shadow-md mt-10 sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-yellow-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Instructor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Students
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available Seats
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((enrolledClass, index) => <tr
                                key={enrolledClass._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    {index + 1}
                                </td>
                                <td scope="row" className="flex gap-3 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-16 h-16 rounded-full" src={enrolledClass.image} alt="" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-base font-semibold">{enrolledClass.name}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {enrolledClass.instructorName}
                                </td>
                                <td className="px-6 py-4">
                                    ${enrolledClass.price}
                                </td>
                                <td className="px-6 py-4">
                                    {enrolledClass.students}
                                </td>
                                <td className="px-6 py-4">
                                    {enrolledClass.availableSeats}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyEnrolledClasses;