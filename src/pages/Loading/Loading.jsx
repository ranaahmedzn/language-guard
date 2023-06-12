import { ScaleLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">   
            <ScaleLoader color="#FEBC1E" />
        </div> 
    );
};

export default Loading;