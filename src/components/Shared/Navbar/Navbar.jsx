import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import Container from "../../Container/Container";
import logo from "../../../assets/logo.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useUserRole from "../../../hooks/useUserRole";
import { toast } from "react-hot-toast";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { ThemeContext } from "../../../providers/ThemeProvider";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => toast.success('Sign out successful!'))
            .then(error => console.log(error))
    }

    const [role] = useUserRole()

    return (
        <header className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-200'} shadow`}>
            <Container>
                <div className="flex gap-5 py-3">
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
                <div className="sticky top-0 z-10 py-5 flex flex-wrap flex-col md:flex-row items-center">
                    <Link to="/" className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} width="50" alt="" />
                        <span className={`ml-3 text-xl ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Language Guard</span>
                    </Link >
                    <nav className="nav-menu md:ml-auto md:mr-4 md:py-1 md:pl-4 md:border-r md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Home</NavLink>
                        <NavLink to="/instructors" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Instructors</NavLink>
                        <NavLink to="/classes" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Classes</NavLink>
                        <a href="/#contact" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Contact</a>
                        {
                            user && (role.isStudent ? (
                                <NavLink to="/dashboard/mySelectedClasses" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Dashboard</NavLink>
                            ) : role.isAdmin ? (
                                <NavLink to="/dashboard/manageClasses" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Dashboard</NavLink>
                            ) : (
                                <NavLink to="/dashboard/addClass" className={`default ${theme === 'light' ? "hover:text-gray-900" : "hover:text-100"}`}>Dashboard</NavLink>
                            ))
                        }
                    </nav>
                    <button onClick={toggleTheme} className="mr-2.5">
                        {
                            theme === 'light' ? <MdModeNight size={20} />
                                : <MdLightMode size={20} />
                        }
                    </button>
                    {/* TODO: display user profile image and a tooltip when hover profile image */}
                    {
                        user ? <button onClick={handleSignOut} type="submit" className="primary-btn py-2.5">Sign out</button>
                            : <Link to="/login"><button type="submit" className="primary-btn py-2.5">Login</button></Link>
                    }
                </div>
            </Container>
        </header>
    );
};

export default Navbar;