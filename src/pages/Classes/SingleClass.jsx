import { useContext, useState } from "react";
import { FaSpinner, FaUsers } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useBookings from "../../hooks/useBookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserRole from "../../hooks/useUserRole";
import { useNavigate } from "react-router-dom";
import useThemeContext from "../../hooks/useThemeContext";

const SingleClass = ({ singleClass }) => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const [, refetch] = useBookings()
    const [axiosSecure] = useAxiosSecure()
    const [role] = useUserRole()
    const { theme } = useThemeContext()

    const navigate = useNavigate()

    const { _id, name, image, instructorName, instructorImage, instructorEmail, price, availableSeats, students } = singleClass || {}

    const handleSelectClass = () => {
        const selectedClass = { name, image, price, studentEmail: user?.email, instructorName, instructorEmail, classId: _id }

        if (user && role.isStudent) {
            setLoading(true)
            axiosSecure.post('/bookings', selectedClass)
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
                .catch(error => {})
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops..',
                text: 'You have to login in order to select classes!',
            })
            navigate('/login', {replace: true})
        }
    }

    return (
        <div className={`w-full h-full border ${theme === 'light' ? 'border-gray-300' : 'border-gray-500'} border-opacity-70 rounded-lg overflow-hidden`}>
            <img src={image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />

            <div className={`p-6 ${availableSeats === 0 && "bg-rose-400"} ${theme === 'light' ? "bg-gray-100 text-gray-900" : "bg-[#1c2d49] text-gray-100"}`}>
                <img src={instructorImage} className="relative w-[60px] -mt-[56px] mb-2.5 rounded-full ring-4 ring-[#FEBC1E]" alt="" />

                <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-xs title-font font-medium text-center mb-1 ${theme === 'light' ? "text-gray-500" : "text-gray-300"}`}>{instructorName}</h4>
                    <span className="font-medium flex items-center gap-1"><FaUsers /> <span>{students}</span></span>
                </div>

                <h2 className="text-xl font-medium my-3">{name}</h2>
                <span className="text-2xl font-bold my-2">${parseFloat(price).toFixed(2)}</span>

                <div className="flex items-center justify-between">
                    <p className={`leading-relaxed ${theme === 'light' ? "text-gray-900" : "text-gray-300"}`}>Available seats: {availableSeats}</p>
                    <button onClick={handleSelectClass} disabled={role.isInstructor ||role.isAdmin || availableSeats === 0 && true} className="primary-btn py-3 flex items-center gap-1 disabled:bg-gray-200">
                        {
                            loading ? <><span className="animate-spin">
                                    <FaSpinner size={18} /></span><span>Select</span></>
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