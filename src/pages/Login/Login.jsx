import { useForm } from "react-hook-form";
import Container from "../../components/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const { signInUser } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        setLoading(true)
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                reset()
                setLoading(false)
                toast.success('Sing in successful!')
                navigate(from, { replace: true })
            })
            .catch(error => {
                // console.log(error)
                setLoading(false)
                toast.error(error?.message)
            })
    };

    //TODO: design aktu change korte hobe
    return (
        <div className="bg-neutral-200">
            <Helmet>
                <title>Login - Language Guard</title>
            </Helmet>
            <Container>
                <div className="py-28 px-4">
                    <div className="mx-auto min-h-[614px] w-full md:w-2/3 flex flex-col md:flex-row rounded-lg shadow-xl overflow-hidden">
                        <div className="w-full md:w-1/2 p-6 md:p-10 bg-white flex justify-center items-center flex-col">
                            <div className="w-full">
                                <h3 className="text-3xl font-bold text-center mb-6">Login</h3>
                                <SocialLogin></SocialLogin>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-5">
                                        <input type="email" {...register("email", { required: true })} id="email" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Enter email" required />
                                    </div>
                                    <div className="mb-5 relative">
                                        <input type={show ? "text" : "password"} {...register("password", { required: true })} id="password" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Enter password" required />

                                        <span onClick={() => setShow(!show)} className='absolute top-3 right-3 cursor-pointer'>
                                            {
                                                show ? <FaEyeSlash />
                                                    : <FaEye />
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-start mb-6 -mt-3">
                                        <label htmlFor="remember" className="text-sm font-medium text-gray-900 dark:text-gray-300">Forgot Password?</label>
                                    </div>
                                    <div className="text-center"><button type="submit" className="primary-btn py-3 flex items-center gap-1">
                                        {
                                            loading ? <><span className="animate-spin">
                                                <FaSpinner size={18} /></span><span>Login</span></>
                                                : <span>Login</span>
                                        }
                                    </button></div>
                                </form>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-10 bg-red-500 text-white">
                            <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
                                <h3 className="text-3xl font-bold">Hello, There!</h3>
                                <p>Don&apos;t have an account? Create your own account and start journey with us</p>
                                <Link to="/signup"><button className="outline-btn">Sing Up</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;