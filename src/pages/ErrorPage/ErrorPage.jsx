import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorImage from '../../assets/error-img.jpg'
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className='h-screen px-4 flex justify-center items-center'>
            <Helmet>
                <title>404 - Language Guard</title>
            </Helmet>
            <div className='flex gap-5 flex-col items-center'>
                <img className='w-[400px] -mt-10' src={errorImage} alt="" />
                <h2 className='font-bold text-4xl text-center mb-2'>Page Not Found</h2>
                <Link to='/'>
                    <button className='primary-btn py-3 flex gap-2 items-center'>
                        <FaHome />
                        <span>Go Back Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;