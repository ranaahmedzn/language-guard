import { useState } from 'react';
import useAuthInfo from '../../../hooks/useAuthInfo';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const DashboardNav = ({name, number}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const {user, signOutUser} = useAuthInfo()
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setOpenDropdown(!openDropdown)
                toast.success('Sign out successful!')
                navigate('/', {replace: true})
            })
            .then(error => {})
    }

    return (
        <div className="bg-yellow-200 rounded-xl flex p-5 items-center">
            <h2 className="flex-grow text-2xl font-semibold">{name}{parseInt(number) > 0 ? <>: {number}</> : <>: {number}</>}</h2>
            {
                user ? <div className="relative">
                    <img onClick={() => setOpenDropdown(!openDropdown)} type="button" className="w-10 h-10 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                    <div className={`${openDropdown ? "block" : "hidden"} absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow border border-gray-100 w-44`}>
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>{user?.displayName}</div>
                            <div className="font-medium truncate">{user?.email}</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <Link to="/" className="block px-4 py-2 w-full hover:bg-gray-100">Home</Link>
                            </li>
                        </ul>
                        <div className="py-1">
                            <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Sign out</button>
                        </div>
                    </div>
                </div>
                    : <Link to="/login"><button type="submit" className="primary-btn py-2.5">Login</button></Link>
            }
        </div>
    );
};

export default DashboardNav;