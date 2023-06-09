import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Feedback = ({feedback}) => {
    //TODO: add date and use the actual student image.
    return (
        <div className="w-full h-full text-center p-7 rounded-lg bg-white shadow">
            <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" className="w-[110px] mx-auto -mt-20 mb-6 rounded-full ring-4 ring-[#FEBC1E]" alt="" />
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">{feedback.name}</h3>
                <Rating className="text-[#FEBC1E] text-lg"
                    readonly
                    placeholderRating={feedback.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                />
                <p className="text-[15px]">{feedback.details.slice(0, 250)}..</p>
            </div>
        </div>
    );
};

export default Feedback;