import { FaUsers } from "react-icons/fa";

const SingleClass = ({ singleClass }) => {
    const { name, image, instructorName, instructorImage, price, availableSeats, students } = singleClass || {}

    return (
        <div className="w-full h-full border-2 border-gray-200 border-opacity-70 rounded-lg overflow-hidden">
            <img src={image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />

            <div className="p-6">
                <img src={instructorImage} className="relative w-[60px] -mt-[56px] mb-2.5 rounded-full ring-4 ring-[#FEBC1E]" alt="" />

                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs title-font font-medium text-center text-gray-400 mb-1">{instructorName}</h4>
                    <span className="font-medium flex items-center gap-1"><FaUsers /> <span>{students}</span></span>
                </div>

                <h2 className="text-xl font-medium text-gray-900 my-3">${name}</h2>
                <span className="text-2xl font-bold my-2">${parseFloat(price).toFixed(2)}</span>

                <div className="flex items-center justify-between">
                    <p className="leading-relaxed">Available seats: {availableSeats}</p>
                    <button className="primary-btn py-3">Select</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;