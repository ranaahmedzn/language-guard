import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const Payment = () => {
    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()

    const { data: booking = {} } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure(`/bookings/${id}`)
            return res.data
        },
    })
    const price = parseInt(booking?.price);

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

    return (
        <div>
            <Helmet>
                <title>Payment - Language Guard</title>
            </Helmet>
            <DashboardNav name="Payment" />
            <h2 className="font-bold text-2xl mb-6 pt-6 pb-3">Your course Price: ${price && price}</h2>
            <Elements stripe={stripePromise}>
                <PaymentForm price={price} bookingId={id} classId={booking.classId} />
            </Elements>
        </div>
    );
};

export default Payment;