import { useForm } from "react-hook-form";
import Container from "../../components/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [show, setShow] = useState(false)
    const { signInUser } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset()
                alert("Login successful!")
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                alert(error.message)
            })
    };

    //TODO: design aktu change korte hobe
    return (
        <div className="bg-neutral-200">
            <Container>
                <div className="py-28">
                    <div className="mx-auto min-h-[614px] w-2/3 flex rounded-lg shadow-xl overflow-hidden">
                        <div className="w-1/2 p-10 bg-white flex justify-center items-center flex-col">
                            <div className="w-full">
                                <h3 className="text-3xl font-bold text-center mb-6">Login</h3>
                                <SocialLogin></SocialLogin>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-5">
                                        <input type="email" {...register("email", { required: true })} id="email" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Enter email" required />
                                    </div>
                                    <div className="mb-5 relative">
                                        <input type={show ? "text" : "password"} {...register("password", { required: true })} id="password" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Enter password" required />

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
                                    <div className="text-center"><button type="submit" className="primary-btn py-3">Login</button></div>
                                </form>
                            </div>
                        </div>

                        <div className="w-1/2 bg-red-500 text-white">
                            <div className="h-full flex flex-col justify-center items-center space-y-4">
                                <h3 className="text-3xl font-bold">Hello, There!</h3>
                                <p>Enter your account and start journey with us</p>
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