import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data
        },
    })

    const handleMakeInstructor = (id, name) => {
        axiosSecure.patch(`/users/${id}`)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount){
                refetch()
                toast.success(`${name} is now Instructor!`)
            }
        })
        .catch(error => {})
    }

    const handleMakeAdmin = (id, name) => {
        axiosSecure.put(`/users/${id}`)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount){
                refetch()
                toast.success(`${name} is now Admin!`)
            }
        })
        .catch(error => {})
    }

    return (
        <div>
            <Helmet>
                <title>Manage Users - Language Guard</title>
            </Helmet>
            <DashboardNav name="Manage Users" number={users.length} />

            <div className="relative overflow-x-auto shadow-md mt-10 sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-yellow-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    {index + 1}
                                </td>
                                <td scope="row" className="flex gap-3 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-12 h-12 rounded-full" src={user.image} alt="" />
                                    <p className="text-base font-semibold">{user.name}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => handleMakeInstructor(user._id, user.name)} className="bg-yellow-100 text-yellow-600 text-sm font-medium px-4 py-2 rounded inline-flex gap-2 items-center" disabled={user.role === "instructor" && true}>
                                            Make Instructor
                                        </button>
                                        <button onClick={() => handleMakeAdmin(user._id, user.name)} className="bg-green-100 text-green-600 text-sm font-medium px-4 py-2 rounded inline-flex gap-2 items-center" disabled={user.role === "admin" && true}>
                                            Make Admin
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;