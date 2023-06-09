import axios from "axios";
import { useContext, useState } from "react";
import { FaSpinner, FaUsers } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useBookings from "../../hooks/useBookings";

const SingleClass = ({ singleClass }) => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const [, refetch] = useBookings()

    //TODO: load isStudent base data from server
    const isStudent = true;

    const { _id, name, image, instructorName, instructorImage, instructorEmail, price, availableSeats, students } = singleClass || {}

    const handleSelectClass = () => {
        const selectedClass = { name, image, price, studentEmail: user?.email, instructorName, instructorEmail, classId: _id }

        if (user && isStudent) {
            setLoading(true)
            axios.post('/bookings', selectedClass)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        setLoading(false)
                        Swal.fire(
                            'Selected!',
                            'Added class to your selected List',
                            'success'
                        )
                    }
                })
                .catch(error => console.log(error))
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops..',
                text: 'You have to login to select classes!',
            })
        }
    }

    return (
        <div className="w-full h-full border-2 border-gray-200 border-opacity-70 rounded-lg overflow-hidden">
            <img src={image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />

            <div className={`p-6 ${availableSeats === 0 && "bg-rose-400"}`}>
                <img src={instructorImage} className="relative w-[60px] -mt-[56px] mb-2.5 rounded-full ring-4 ring-[#FEBC1E]" alt="" />

                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs title-font font-medium text-center text-gray-500 mb-1">{instructorName}</h4>
                    <span className="font-medium flex items-center gap-1"><FaUsers /> <span>{students}</span></span>
                </div>

                <h2 className="text-xl font-medium text-gray-900 my-3">{name}</h2>
                <span className="text-2xl font-bold my-2">${parseFloat(price).toFixed(2)}</span>

                <div className="flex items-center justify-between">
                    <p className="leading-relaxed">Available seats: {availableSeats}</p>
                    <button onClick={handleSelectClass} disabled={!isStudent || availableSeats === 0 && true} className="primary-btn py-3 flex items-center gap-1 disabled:bg-gray-200">
                        {
                            loading ? <span className="animate-spin"><FaSpinner size={18}/></span>
                                : <><MdLibraryAdd size={16} />
                                    <span>Select</span></>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;