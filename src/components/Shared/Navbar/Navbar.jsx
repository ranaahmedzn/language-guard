import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import Container from "../../Container/Container";
import logo from "../../../assets/logo.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useUserRole from "../../../hooks/useUserRole";
import { toast } from "react-hot-toast";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { ThemeContext } from "../../../providers/ThemeProvider";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const { user, signOutUser } = useContext(AuthContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setOpenDropdown(!openDropdown)
                toast.success('Sign out successful!')
            })
            .then(err => { })
    }

    const [role] = useUserRole()

    // to navigate to the contact section of the homepage
    const navigate = useNavigate();
    
    const navigateToContactSection = () => {
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if(contactSection){
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100);
    };

    const navigateToContactSection2 = () => {
        setOpen(!open)
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if(contactSection){
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100);
    };

    // prevent the scrolling while the open state is true
    useEffect(() => {
        const handleBodyScroll = () => {
          document.body.style.overflow = open ? 'hidden' : '';
        };
    
        handleBodyScroll();
    
        return () => {
          document.body.style.overflow = '';
        };
      }, [open]);

    return (
        <header className={`${theme === 'light' ? 'bg-white text-gray-600' : 'text-gray-200'} shadow ${open ? "overflow-hidden" : ""}`}>
            <Container>
                <div className="hidden lg:flex gap-5 py-3">
                    <p className="flex items-center gap-2 text-sm">
                        <FaMapMarkerAlt />
                        <span>102 Street, California, USA</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <FaPhone />
                        <span>+555 777 0000</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <FaEnvelope />
                        <span>info@language.guard.com</span>
                    </p>
                    <div className="flex gap-2 sm:ml-auto">
                        <span className="p-2 rounded-full bg-[#FEBC1E] text-gray-900 cursor-pointer transition-all duration-200"><FaFacebook size={14} /></span>
                        <span className="p-2 rounded-full hover:bg-[#FEBC1E] hover:text-gray-900 cursor-pointer transition-all duration-200"><FaTwitter size={14} /></span>
                        <span className="p-2 rounded-full hover:bg-[#FEBC1E] hover:text-gray-900 cursor-pointer transition-all duration-200"><FaLinkedin size={14} /></span>
                        <span className="p-2 rounded-full hover:bg-[#FEBC1E] hover:text-gray-900 cursor-pointer transition-all duration-200"><FaInstagram size={14} /></span>
                    </div>
                </div>
                <hr className="border-0 h-[1px] bg-[#9999995e]" />


                {/* for large devices */}
                <div className="hidden lg:flex py-5 flex-wrap flex-col md:flex-row items-center">
                    <Link to="/" className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} width="50" alt="" />
                        <span className={`ml-3 text-xl ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Language Guard</span>
                    </Link >
                    <nav className="nav-menu md:ml-auto md:mr-4 md:py-1 md:pl-4 md:border-r md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Home</NavLink>
                        <NavLink to="/instructors" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Instructors</NavLink>
                        <NavLink to="/classes" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Classes</NavLink>
                        <a onClick={navigateToContactSection} className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Contact</a>
                        {
                            user && (role.isStudent ? (
                                <NavLink to="/dashboard/mySelectedClasses" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Dashboard</NavLink>
                            ) : role.isAdmin ? (
                                <NavLink to="/dashboard/manageClasses" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Dashboard</NavLink>
                            ) : (
                                <NavLink to="/dashboard/addClass" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-gray-100"}`}>Dashboard</NavLink>
                            ))
                        }
                    </nav>
                    <button onClick={toggleTheme} className="mr-3">
                        {
                            theme === 'light' ? <MdModeNight size={20} />
                                : <MdLightMode size={20} />
                        }
                    </button>
                    {
                        user ? <div className="relative">
                            <img onClick={() => setOpenDropdown(!openDropdown)} type="button" className="w-10 h-10 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                            <div className={`${openDropdown ? "block" : "hidden"} absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow border border-gray-100 w-44`}>
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>{user?.displayName}</div>
                                    <div className="font-medium truncate">{user?.email}</div>
                                </div>

                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
                                    {role.isStudent ?
                                        <li>
                                            <Link to="/dashboard/mySelectedClasses" className="block px-4 py-2 w-full hover:bg-gray-100">Dashboard</Link>
                                        </li>
                                        : role.isAdmin ?
                                            <li>
                                                <Link to="/dashboard/manageClasses" className="block px-4 py-2 w-full hover:bg-gray-100">Dashboard</Link>
                                            </li>
                                            :
                                            <li>
                                                <Link to="/dashboard/addClass" className="block px-4 py-2 w-full hover:bg-gray-100">Dashboard</Link>
                                            </li>}
                                </ul>

                                <div className="py-1">
                                    <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Sign out</button>
                                </div>
                            </div>
                        </div>
                            : <Link to="/login"><button type="submit" className="primary-btn py-2.5">Login</button></Link>
                    }
                </div>

                {/* for smaller device  */}
                <div className="lg:hidden relative h-[75px] px-3 flex justify-between items-center">
                    <Link to="/" className="flex font-medium items-center text-gray-900 md:mb-0">
                        <img src={logo} width="50" alt="" />
                        <span className={`ml-3 text-xl ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Language Guard</span>
                    </Link >
                    <div className="flex items-center">
                        <button onClick={toggleTheme} className="mr-3">
                            {
                                theme === 'light' ? <MdModeNight size={20} />
                                    : <MdLightMode size={20} />
                            }
                        </button>
                        <div onClick={() => setOpen(!open)} >
                            {
                                open
                                    ? <HiXMark className="h-8 w-8" />
                                    : <HiBars3BottomRight className="h-8 w-8" />
                            }
                        </div>
                    </div>

                    <ul className={`nav-menu flex flex-col z-50 fixed gap-8 py-8 p-6 ${open ? 'top-[75px] left-0' : "top-[75px] -left-[1000px]"} duration-500 bg-[#122033] w-full h-screen border-t border-gray-700`}>
                        <li><NavLink to="/" className={`default text-gray-300`}>Home</NavLink></li>
                        <li><NavLink to="/instructors" className={`default text-gray-300`}>Instructors</NavLink></li>
                        <li><NavLink to="/classes" className={`default text-gray-300`}>Classes</NavLink></li>
                        <li><a onClick={navigateToContactSection2} className={`default text-gray-300`}>Contact</a></li>
                        {
                            user && (role.isStudent ? (
                                <li><NavLink to="/dashboard/mySelectedClasses" className={`default text-gray-300`}>Dashboard</NavLink></li>
                            ) : role.isAdmin ? (
                                <li><NavLink to="/dashboard/manageClasses" className={`default text-gray-300`}>Dashboard</NavLink></li>
                            ) : (
                                <li><NavLink to="/dashboard/addClass" className={`default text-gray-300`}>Dashboard</NavLink></li>
                            ))
                        }
                        <li className="flex items-center gap-3">
                            {user ? <><button onClick={handleSignOut} className="primary-btn py-2.5">Sign out</button>
                                <img className="w-10 h-10 rounded-full cursor-pointer" src={user?.photoURL} alt="" /></>
                                : <Link to="/login"><button type="submit" className="primary-btn py-2.5">Login</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;