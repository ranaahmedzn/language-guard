import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSingIn()
        .then(result => {
            const user = result.user;
            // console.log(user)
            toast.success('Successfully login with google!');

            const newUser = {name: user.displayName, email: user.email, role: 'student', image: user.photoURL}
            // call a post api to send users to the server 
            axios.post('/users', newUser)
            .then(res => {
                // console.log(res.data)
            })
            .catch(error => {})

            navigate(from, {replace: true})
        })
        .catch(error => toast.error(error?.message))
    }

    const handleTwitterSignIn = () => {
        return Swal.fire({
            icon: 'info',
            title: 'Oops..',
            text: 'Twitter login is unavailable now for some issue!',
          })
    }

    return (
        <div className='text-center mb-4'>
        <div className='flex gap-4 justify-center items-center mb-4'>
            <button onClick={handleGoogleSignIn} className='flex items-center p-2.5 w-full rounded-lg border cursor-pointer hover:bg-neutral-200 text-sm font-medium'><FaGoogle /> <span className='mx-auto'>Continue with</span></button>

            <div className='h-[30px] w-[1px] bg-gray-400'></div>

            <button onClick={handleTwitterSignIn} className='flex items-center p-2.5 w-full rounded-lg border cursor-pointer hover:bg-neutral-200 text-sm font-medium'><FaTwitter /> <span className='mx-auto'>Continue with</span></button>
        </div>
        <span className='text-sm font-medium'>Or use your account</span>
        </div>
    );
};

export default SocialLogin;