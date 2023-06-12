import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import DashboardNav from "../../../components/Shared/DashboardNav/DashboardNav";

const MyClasses = () => {
    const [openModal, setOpenModal] = useState(false)
    const { user, loading } = useAuthInfo()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${user.email}`);
            return res.data;
        }
    })

    return (
        <div className="max-w-full">
            <Helmet>
                <title>My Classes - Language Guard</title>
            </Helmet>
            <DashboardNav name="My Classes" number={classes.length}/>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {
                    classes.map((singleClass) => <div
                        key={singleClass._id}
                        className="w-full h-full border-2 border-gray-200 border-opacity-70 rounded-lg overflow-hidden">
                        <img src={singleClass.image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />

                        <div className={`p-5`}>
                            <div className="text-center">
                                <img src={singleClass.instructorImage} className="relative w-[60px] -mt-[52px] mb-2.5 mx-auto rounded-xl ring-4 ring-[#FEBC1E]" alt="" />
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
                            {singleClass.feedback ?
                                <p className="pt-3 text-center">Feedback: {singleClass.feedback}</p>
                                : <p className="pt-3 text-center">Feedback: No feedback here</p>
                            }
                            <button onClick={() => setOpenModal(!openModal)} className="primary-btn py-2.5">Update</button>
                            {openModal && <UpdateModal id={singleClass._id} setOpenModal={setOpenModal} />}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClasses;