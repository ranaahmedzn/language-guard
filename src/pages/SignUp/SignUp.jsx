import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            reset()
            alert("Sign up successful!")

            updateUserProfile(data.name, data.photoUrl)
            .then(()=> alert("Profile updated"))
            .catch((error => console.log(error)))
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
                        <div className='flex gap-4'>
                            <div className="mb-6 w-1/2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="text" {...register("name", { required: true })} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
                            </div>
                            <div className="mb-6 w-1/2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" {...register("email", { required: true })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required />
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className="mb-6 w-1/2">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" {...register("password", { required: true })} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
                            </div>
                            <div className="mb-6 w-1/2">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" {...register("confirmPassword", { required: true })} id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
                            </div>
                        </div>
                        <div className="mb-6 w-full">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                <input type="url" {...register("photoUrl", { required: true })} id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter photo url" required />
                            </div>
                        
                        <button type="submit" className="primary-btn">Sign Up</button>
                    </form>
                    <p className="mt-5">Already have an account? <Link to="/login" className="font-medium underline">Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </Container>
    );
};

export default SignUp;