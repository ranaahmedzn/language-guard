import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const UpdateModal = ({id, setOpenModal }) => {
    const { user } = useAuthInfo()
    const [loading, setLoading] = useState(false)
    const [axiosSecure] = useAxiosSecure()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setLoading(true)
        const { name, image, instructorName, instructorEmail, availableSeats, price } = data;

        const formData = new FormData()
        formData.append('image', image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                // console.log(imageData)
                if (imageData.success) {
                    const image_url = imageData.data.display_url;

                    const updatedClass = { name, image: image_url, instructorName, instructorEmail, instructorImage: user?.photoURL, availableSeats, price: parseFloat(price), status: 'pending' }

                    axiosSecure.patch(`/classes/update/${id}`, updatedClass)
                        .then(res => {
                            if (res.data.insertedId) {
                                reset()
                                setLoading(false)
                                Swal.fire(
                                    'Updated!',
                                    'Successfully updated your class!.',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {})
                }
            })
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-screen flex justify-center items-center bg-gray-900 bg-opacity-80">
            <div className="relative w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => setOpenModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 ml-auto inline-flex items-center">
                        <AiFillCloseCircle size={24} />
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">Update your class</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Class Name</label>
                                        <input type="text" {...register("name")} name="name" id="name" className="py-2.5 px-3 block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter class name" required />
                                    </div>

                                    <div>
                                        <label htmlFor="image" className="block text-sm font-medium text-black mb-1">Class Image</label>
                                        <input type="file" {...register("image")} accept='image/*' className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="image" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="instructorName" className="block text-sm font-medium text-black mb-1">Instructor Name</label>
                                        <input type="text" {...register("instructorName")} value={user?.displayName} name="instructorName" id="instructorName" className="py-2.5 px-3 block w-full text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50" />
                                    </div>

                                    <div>
                                        <label htmlFor="instructorEmail" className="block text-sm font-medium text-black mb-1">Instructor Email</label>
                                        <input type="email" value={user?.email} name="instructorEmail" {...register("instructorEmail")} id="instructorEmail" className="py-2.5 px-3 block w-full text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="availableSeats" className="block text-sm font-medium text-black mb-1">Available Seats</label>
                                        <input type="text" {...register("availableSeats")} name="availableSeats" id="availableSeats" className="py-2.5 px-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter available seat" required />
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-black mb-1">Price</label>
                                        <input type="number" {...register("price")} name="price" id="price" className="py-2.5 px-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter price" required />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-2 ">
                                <button onClick={() => setOpenModal(false)} className="primary-btn py-2">Close</button>
                                <button type="submit" className="primary-btn py-2 flex items-center gap-1">
                                    {
                                        loading ? <><span className="animate-spin"><FaSpinner size={18} /></span><span>Update</span></>
                                            : <span>Update</span>
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

export default UpdateModal;