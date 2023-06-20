import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FeedbackModal = ({ id, setOpenModal }) => {
    const [loading, setLoading] = useState(false)
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setLoading(true)
        // console.log(data.message)
        const feedback = data.message;

        if (!feedback) {
            Swal.fire({
                icon: 'info',
                title: 'Oops..',
                text: 'Please write a feedback message first!',
            })
            setLoading(false)
            return;
        }

        axiosSecure.patch(`/classes/feedback/${id}`, { feedback })
            .then(res => {
                if (res.data.modifiedCount) {
                    reset()
                    setLoading(false)
                    Swal.fire(
                        'Feedback sent!',
                        'Successfully sent the feedback.',
                        'success'
                    )
                }
            })
            .catch(error => {})
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-screen flex justify-center items-center bg-gray-900 bg-opacity-10">
            <div className="relative w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => setOpenModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 ml-auto inline-flex items-center">
                        <AiFillCloseCircle size={24} />
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-3 text-xl font-bold text-gray-900">Send a feedback message</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <textarea id="message" {...register("message")} name="message" rows="4" className="py-2 px-3 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-transparent bg-gray-200 text-gray-600" placeholder="Write message here.."></textarea>
                            </div>

                            <div className="flex justify-end items-center gap-2 ">
                                <button onClick={() => setOpenModal(false)} className="primary-btn py-2">Close</button>
                                <button type="submit" className="primary-btn py-2 flex items-center gap-1">
                                    {
                                        loading ? <><span className="animate-spin"><FaSpinner size={18} /></span><span>Send</span></>
                                            : <span>Send</span>
                                    }
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;