import { FaUsers } from 'react-icons/fa';
import './PopularClass.css'
import useThemeContext from '../../../hooks/useThemeContext';

const PopularClass = ({ popularClass }) => {
    const { name, image, price, instructorName, instructorImage, students, availableSeats } = popularClass || {}
    const { theme } = useThemeContext()

    return (
        <div className={`card w-full h-full border ${theme === 'light' ? 'border-gray-300 border-opacity-70' : 'border-gray-500 border-opacity-50'} rounded-lg overflow-hidden shadow-lg`}>
            <img src={image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="" />

            <div className={`card-content h-full w-full p-4 md:p-6 ${availableSeats === 0 && "bg-rose-400"} ${theme === 'light' ? "bg-gray-100 text-gray-900" : "bg-[#1c2d49] text-gray-100"}`}>
                <img src={instructorImage} className="instructor-img relative w-[60px] -mt-[56px] mb-2.5 rounded-full ring-4 ring-[#FEBC1E]" alt="" />

                <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-xs title-font font-medium text-center mb-1 ${theme === 'light' ? "text-gray-500" : "text-gray-300"}`}>{instructorName}</h4>
                    <span className="font-medium flex items-center gap-1"><FaUsers /> <span>{students}</span></span>
                </div>
    
                <div className="space-y-3">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="text-2xl font-bold">${parseFloat(price).toFixed(2)}</p>
                    <p className={`leading-relaxed ${theme === 'light' ? "text-gray-900" : "text-gray-300"}`}>Available seats: {availableSeats}</p>
                </div>
            </div>
        </div>

    );
};

export default PopularClass;