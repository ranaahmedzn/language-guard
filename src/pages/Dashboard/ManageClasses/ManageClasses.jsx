import { FaUsers } from "react-icons/fa";
import useClasses from "../../../hooks/useClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const ManageClasses = () => {
    const [openModal, setOpenModal] = useState(false)
    const [classes, refetch] = useClasses()
    const [axiosSecure] = useAxiosSecure()

    const handleApprove = (id) => {
        axiosSecure.patch(`/classes/${id}`)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount){
                refetch()
                toast.success('Approved successful!');
            }
        })
        .catch(error => {})
    }

    const handleDeny = (id) => {
        axiosSecure.put(`/classes/${id}`)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount){
                refetch()
                toast.success('Denied successful!')
            }
        })
        .catch(error => {})
    }

    return (
        <div>
            <Helmet>
                <title>Manage Classes - Language Guard</title>
            </Helmet>
            <DashboardNav name="Manage Classes" number={classes.length} />
            <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map((singleClass) => <div
                    key={singleClass._id}
                    className="w-full border-2 border-gray-200 border-opacity-70 rounded-lg overflow-hidden">
                    <img src={singleClass.image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />
        
                    <div className={`px-6 pt-6 ${singleClass.availableSeats === 0 && "bg-rose-400"}`}>
                        <div className="text-center">
                            <img src={singleClass.instructorImage} className="relative w-[60px] -mt-[56px] mb-2.5 mx-auto rounded-xl ring-4 ring-[#FEBC1E]" alt="" />
                            <h4 className="text-xs font-medium text-gray-500 mb-1">{singleClass.instructorName}</h4>
                            <p className="text-xs font-medium text-gray-500 mb-1">{singleClass.instructorEmail}</p>
                            <h2 className="text-xl font-medium text-gray-900 my-3">{singleClass.name}</h2>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl font-bold my-2">${parseFloat(singleClass.price).toFixed(2)}</span>
                            <span className={`text-sm font-medium px-4 py-2 rounded ${singleClass.status === 'approved' ? 'bg-green-100 text-green-600' : singleClass.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>{singleClass.status}</span>
                        </div>

                        <div className="flex items-center justify-between border-b pb-3">
                            <p className="leading-relaxed">Available seats: {singleClass.availableSeats}</p>
                            <span className="font-medium flex items-center gap-1"><FaUsers /> <span>{singleClass.students}</span></span>
                        </div>

                        <div className="py-4 flex gap-2 items-center justify-between">
                            <button onClick={() => handleApprove(singleClass._id)} className="text-sm font-medium px-4 py-2 rounded hover:text-[#FEBC1E] shadow disabled:hover:text-black" disabled={singleClass.status === 'approved' || singleClass.status === 'denied' && true}>Approve</button>

                            <button onClick={() => handleDeny(singleClass._id)}  className="text-sm font-medium px-4 py-2 rounded hover:text-[#FEBC1E] shadow disabled:hover:text-black" disabled={singleClass.status === 'approved' || singleClass.status === 'denied' && true}>Deny</button>

                            <button onClick={() => setOpenModal(!openModal)} className="text-sm font-medium px-4 py-2 rounded hover:text-[#FEBC1E] shadow">Feedback</button>
                        </div>
                        {openModal && <FeedbackModal id={singleClass._id} setOpenModal={setOpenModal} />}
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;