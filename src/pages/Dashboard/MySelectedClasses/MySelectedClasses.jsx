import Swal from "sweetalert2";
import useBookings from "../../../hooks/useBookings";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySelectedClasses = () => {
    const [bookings, refetch] = useBookings()
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this from here?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Successfully deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl w-fit rounded-lg shadow-xl font-bold p-3 bg-sky-200 border border-sky-500 text-sky-500">Total Selected Classes: {bookings.length}</h2>

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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => <tr
                                key={booking._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    {index + 1}
                                </td>
                                <td scope="row" className="flex gap-3 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-16 h-16 rounded-full" src={booking.image} alt="" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-base font-semibold">{booking.name}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {booking.instructorName}
                                </td>
                                <td className="px-6 py-4">
                                    ${booking.price}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => handleDelete(booking._id)} className="bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded inline-flex gap-2 items-center">
                                            Delete
                                        </button>
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded inline-flex gap-2 items-center">
                                                Payment
                                            </button>
                                        </Link>
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

export default MySelectedClasses;