import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(true)
    const [show, setShow] = useState(false)
    const { createUser, updateUserProfile, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)

        if (data.password !== data.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops..',
                text: "Confirm password didn't matched!",
            })
            return;
        }
        const newUser = { name: data.name, email: data.email, role: 'student', image: data.photoUrl }

        setLoading(true)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                reset()
                setLoading(false)
                toast.success('Sing up successful!')

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => { })
                    .catch((error => {}))

                // call a post api to send users to the server 
                axios.post('/users', newUser)
                    .then(res => {
                        // console.log(res.data)
                        navigate('/', {replace: true})
                    })
                    .catch(error => {})

                if (!data.remember) {
                    signOutUser()
                        .then(() => {
                            navigate("/login")
                            toast("Login with to your account.")
                        })
                        .catch(error => {})
                }
            })
            .catch(error => {
                // console.log(error)
                setLoading(false)
                toast.error(error?.message)
            })
    };

    return (
        <div className='bg-neutral-200'>
            <Helmet>
                <title>Sign up - Language Guard</title>
            </Helmet>
            <Container>
                <div className="py-28 px-4">
                    <div className="mx-auto w-full md:w-2/3 flex flex-col md:flex-row-reverse rounded-lg shadow-xl overflow-hidden">
                        <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
                            <h3 className="text-3xl font-bold text-center mb-6">Sign Up</h3>
                            <SocialLogin></SocialLogin>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-5">
                                    <input type="name" {...register("name", { required: true })} id="name" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] focus:outline-none block w-full p-2.5" placeholder="Enter name" required />
                                </div>
                                <div className="mb-5">
                                    <input type="email" {...register("email", { required: true })} id="email" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Enter email" required />
                                </div>
                                <div className="mb-5 relative">
                                    <input type={show ? "text" : "password"} {...register("password", { required: true, minLength: 6, pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[!#$%&? "])/ })} id="password" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Enter password" required />


                                    {errors.password?.type === 'minLength' && <p className='text-sm font-medium text-rose-500 mt-2'>Password must be 6 characters or longer</p>}

                                    {errors.password?.type === 'pattern' && <p className='text-sm font-medium text-rose-500 mt-2'>Password should contain at least one digit, one uppercase letter and one special character!</p>}

                                    <span onClick={() => setShow(!show)} className='absolute top-3 right-3 cursor-pointer'>
                                        {
                                            show ? <FaEyeSlash />
                                                : <FaEye />
                                        }
                                    </span>
                                </div>
                                <div className="mb-5">
                                    <input type="password" {...register("confirmPassword", { required: true })} id="confirmPassword" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Confirm password" required />
                                </div>
                                <div className="mb-5">
                                    <input type="url" {...register("photoUrl", { required: true })} id="photoUrl" className="bg-neutral-200 border-0 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#FEBC1E] block w-full p-2.5" placeholder="Photo URL" required />
                                </div>
                                <div className="flex items-center mb-6 -mt-2">
                                    <div className="flex items-center">
                                        <input id="remember" type="checkbox" {...register("remember")} onClick={() => setChecked(!checked)} checked={checked} className="w-4 h-4 m-0 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer" />
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <div className="text-center"><button type="submit" className="primary-btn py-3 flex items-center gap-1">
                                    {
                                        loading ? <><span className="animate-spin">
                                            <FaSpinner size={18} /></span><span>Sign up</span></>
                                            : <span>Sign up</span>
                                    }
                                </button></div>
                            </form>
                        </div>

                        <div className="w-full md:w-1/2 bg-red-500 text-white p-10">
                            <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
                                <h3 className="text-3xl font-bold">Welcome, Back!</h3>
                                <p>If you already have an account please login with your personal info</p>
                                <Link to="/login"><button className="outline-btn">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;