import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import useThemeContext from "../../../hooks/useThemeContext";

const Feedback = ({feedback}) => {
    const { theme } = useThemeContext()

    return (
        <div className={`w-full min-h-[316px] max-h-full text-center p-7 rounded-lg shadow ${theme === 'light' ? "bg-white" : "bg-[#1c2d49]"}`}>
            <img src={feedback.image} className="w-[110px] mx-auto -mt-20 mb-6 rounded-full ring-4 ring-[#FEBC1E]" alt="" />
            <div className="space-y-2">
                <h3 className={`text-xl font-semibold ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>{feedback.name}</h3>
                <Rating className="text-[#FEBC1E] text-lg"
                    readonly
                    placeholderRating={feedback.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                />
                <p className={`text-[15px] ${theme === 'light' ? "text-gray-900" : "text-gray-300"}`}>{feedback.details.slice(0, 250)}..</p>
            </div>
        </div>
    );
};

export default Feedback;