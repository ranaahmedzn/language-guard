import { useContext } from 'react';
import google from '../../../assets/icons/google.png'
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSingIn()
        .then(result => {
            const user = result.user;
            console.log(user)
            alert("Successfully login with google!")
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} type="button" className="text-black border border-[#4285F4] hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-2 items-center dark:focus:ring-[#4285F4]/55 mr-2 my-3">
                <img src={google} width="26" alt="" />
                <span>Sign in with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;