import { useForm } from "react-hook-form";
import Container from "../../components/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";

const Login = () => {
    const { signInUser } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset()
                alert("Login successful!")
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error)
                alert(error.message)
            })
    };

    return (
        <Container>
            <div className="py-20">
                <div className="mx-auto w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" {...register("email", { required: true })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" {...register("password", { required: true })} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Forgot Password?</label>
                        </div>
                        <button type="submit" className="primary-btn">Login</button>
                    </form>
                    <p className="mt-5">Don&apos;t have an account? <Link to="/signup" className="font-medium underline">Sign up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </Container>
    );
};

export default Login;