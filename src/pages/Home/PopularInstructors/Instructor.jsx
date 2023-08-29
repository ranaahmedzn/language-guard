import useThemeContext from "../../../hooks/useThemeContext";

const Instructor = ({instructor}) => {
    const {name, email, image} = instructor || {}
    const { theme } = useThemeContext()
    
    return (
        <div className={`p-5 border border-gray-500 border-opacity-20 rounded-xl cursor-pointer ${theme === 'light' ? "bg-white" : "bg-[#1c2d49]"}`}>
            <div className="h-full text-center">
                <img alt="" className="w-40 h-40 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image} />
                <h2 className={`font-medium text-sm ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>{name}</h2>
                <p className={`${theme === 'light' ? "text-gray-500" : "text-gray-300"}`}>{email}</p>
                <span className="inline-block h-[5px] w-10 rounded-full bg-[#FEBC1E] mt-6"></span>
            </div>
        </div>
    );
};

export default Instructor;