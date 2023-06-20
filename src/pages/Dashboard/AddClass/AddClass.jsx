import { MdLibraryAdd } from "react-icons/md";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const AddClass = () => {
    const [loading, setLoading] = useState(false)
    const { user } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`

    const handleAddClass = (event) => {
        event.preventDefault()
        setLoading(true)

        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0]
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;

        // console.log(name, image, instructorName, instructorEmail, availableSeats, price)

        const formData = new FormData()
        formData.append('image', image)

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                // console.log(imageData)
                if (imageData.success) {
                    const image_url = imageData.data.display_url;

                    const newClass = { name, image: image_url, instructorName, instructorEmail, instructorImage: user?.photoURL, availableSeats, price: parseFloat(price), students: 0, status: 'pending' }

                    axiosSecure.post('/classes', newClass)
                        .then(res => {
                            if (res.data.insertedId) {
                                form.reset()
                                setLoading(false)
                                Swal.fire(
                                    'Added!',
                                    'Successfully added.',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {})
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Add Class - Language Guard</title>
            </Helmet>
            <DashboardNav name="Add Class" />
            <div className="bg-gray-200 w-2/3 mx-auto mt-10 flex flex-col p-4 sm:p-6 lg:p-8 dark:border-gray-700 rounded-lg">
                <form onSubmit={handleAddClass}>
                    <div className="grid">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Class Name</label>
                                <input type="text" name="name" id="name" className="py-2.5 px-3 block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter class name" required />
                            </div>

                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-black mb-1">Class Image</label>
                                <input type="file" accept='image/*' className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="image" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="instructorName" className="block text-sm font-medium text-black mb-1">Instructor Name</label>
                                <input type="text" value={user?.displayName} name="instructorName" id="instructorName" className="py-2.5 px-3 block w-full text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50" />
                            </div>

                            <div>
                                <label htmlFor="instructorEmail" className="block text-sm font-medium text-black mb-1">Instructor Email</label>
                                <input type="email" value={user?.email} name="instructorEmail" id="instructorEmail" className="py-2.5 px-3 block w-full text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label htmlFor="availableSeats" className="block text-sm font-medium text-black mb-1">Available Seats</label>
                                <input type="number" name="availableSeats" id="availableSeats" className="py-2.5 px-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter available seat" required />
                            </div>

                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-black mb-1">Price</label>
                                <input type="number" name="price" id="price" className="py-2.5 px-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter price" required />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button type="submit" className="primary-btn py-3 flex items-center gap-1">
                            {
                                loading ? <><span className="animate-spin"><FaSpinner size={18} /></span><span>Add</span></>
                                    : <><MdLibraryAdd size={16} />
                                    <span>Add</span></>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;