import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Container>
            <div className="py-20">
                <div className="mx-auto w-1/2">
                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Forgot Password?</label>
                        </div>
                        <button type="submit" className="primary-btn">Login</button>
                    </form>
                    <p className="mt-5">Don&apos;t have an account? <Link to="/signup" className="font-medium underline">Sign up</Link></p>
                </div>
            </div>
        </Container>
    );
};

export default Login;