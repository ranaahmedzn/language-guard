import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './PaymentForm.css'
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../hooks/useAuthInfo";
import Swal from "sweetalert2";
import useBookings from "../../../hooks/useBookings";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ price, bookingId, classId }) => {
    const stripe = useStripe();
    const elements = useElements();
    
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const [processing, setProcessing] = useState(false)

    const { user } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()
    const [, refetch] = useBookings()
    const navigate = useNavigate()

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message)
            // console.log('[error]', error);
        }
        else {
            setCardError("")
            // console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError)
        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // console.log(paymentIntent)

            const payment = {
                transactionId: paymentIntent.id,
                name: user?.displayName,
                email: user?.email,
                price,
                bookingId,
                classId,
                date: new Date(),
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data)
                    refetch()
                    navigate('/dashboard/mySelectedClasses', {replace: true})
                    Swal.fire(
                        'Payment successful!',
                        'success'
                    )
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="primary-btn py-2.5 mt-4 flex items-center gap-1" disabled={!stripe || !clientSecret || processing}>
                    {
                        processing ? <><span className="animate-spin">
                            <FaSpinner size={18} /></span><span>Pay</span></>
                            : <span>Pay</span>
                    }
                </button>
            </form>
            <p className="text-rose-500 text-lg font-medium">{cardError}</p>
        </>
    );
};

export default PaymentForm;