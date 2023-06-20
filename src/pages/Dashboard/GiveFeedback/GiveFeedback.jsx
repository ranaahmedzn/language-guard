import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";
import { FaSpinner } from "react-icons/fa";

const GiveFeedback = () => {
    const [rating, setRating] = useState("")
    const [loading, setLoading] = useState(false)
    const { user } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (!rating) {
            Swal.fire({
                icon: 'info',
                title: 'Please give a rating!',
            })
            return;
        }
        const { name, email, details } = data
        const feedback = { name, email, image: user?.photoURL, rating, details, date: new Date() }

        setLoading(true)
        axiosSecure.post('/reviews', feedback)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    setLoading(false)
                    Swal.fire(
                        'Feedback sent!',
                        'Thanks for your feedback😊',
                        'success'
                    )
                }
            })
            .catch(error => { })
    };

    return (
        <div>
            <Helmet>
                <title>Feedback - Language Guard</title>
            </Helmet>
            <DashboardNav name="Feedback" />
            <div className="mt-10 w-2/3 mx-auto space-y-8 bg-neutral-200 p-10 rounded-lg">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Give Feedback</h3>
                    <Rating className="mx-auto mt-4"
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">Name</label>
                                <input type="text" {...register("name")} name="name" value={user?.displayName} id="name" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 text-gray-700 bg-gray-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                                <input type="email" {...register("email")} name="email" value={user?.email} id="email" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 text-gray-700 bg-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium text-gray-900 mb-1">Details</label>
                            <textarea id="details" {...register("details")} name="details" rows="4" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] border-0 text-gray-700 bg-gray-300"></textarea>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="primary-btn py-3 flex items-center gap-1">
                            {
                                loading ? <><span className="animate-spin">
                                    <FaSpinner size={18} /></span><span>Submit</span></>
                                    : <span>Submit</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GiveFeedback;