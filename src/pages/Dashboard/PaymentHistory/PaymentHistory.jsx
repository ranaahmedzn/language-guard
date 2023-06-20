import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const PaymentHistory = () => {
    const { user, loading } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['enrolled-classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data
        },
    })

    return (
        <div>
            <Helmet>
                <title>Payment History - Language Guard</title>
            </Helmet>
            <DashboardNav name="Payment History" number={payments.length} />

            <div className="relative overflow-x-auto shadow-md mt-10 sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-yellow-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TransactionID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr
                                key={payment._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-base">{payment.name}</p>
                                    <p className="text-base font-semibold">{payment.email}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {payment.transactionId}
                                </td>
                                <td className="px-6 py-4">
                                    ${payment.price}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        moment().format("dddd, MMMM DD, YYYY")
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;