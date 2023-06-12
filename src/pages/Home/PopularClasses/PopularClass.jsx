import { FaUsers } from 'react-icons/fa';
import './PopularClass.css'

const PopularClass = ({ popularClass }) => {
    const { name, image, price, instructorName, instructorImage, students, availableSeats } = popularClass || {}

    return (
        <div className="card relative w-full h-[400px] border-2 border-gray-200 border-opacity-70 rounded-lg overflow-hidden">
            <img src={image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />

            <div className={`card-content absolute md:top-36 lg:top-48 left-0 h-full w-full p-6 ${availableSeats === 0 && "bg-rose-400"} bg-gray-100`}>
                <img src={instructorImage} className="instructor-img relative w-[60px] -mt-[56px] mb-2.5 rounded-full ring-4 ring-[#FEBC1E]" alt="" />

                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs title-font font-medium text-center text-gray-500 mb-1">{instructorName}</h4>
                    <span className="font-medium flex items-center gap-1"><FaUsers /> <span>{students}</span></span>
                </div>
    
                <div className="space-y-3">
                    <h2 className="text-xl font-medium text-gray-900">{name}</h2>
                    <p className="text-2xl font-bold">${parseFloat(price).toFixed(2)}</p>
                    <p className="leading-relaxed">Available seats: {availableSeats}</p>
                </div>
            </div>
        </div>

    );
};

export default PopularClass;
{/* <img className="absolute top-0 left-0 rounded-t-lg w-full h-full object-cover" src={image} alt="" /> */ }