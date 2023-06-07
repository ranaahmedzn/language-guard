import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import Container from "../../Container/Container";
import logo from "../../../assets/logo.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";


const Navbar = () => {
    return (
        <header className="bg-white text-gray-600 shadow-lg">
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
                        <span className="p-2 rounded-full bg-[#FEBC1E] cursor-pointer transition-all duration-200"><FaFacebook size={14} /></span>
                        <span className="p-2 rounded-full hover:bg-[#FEBC1E] cursor-pointer transition-all duration-200"><FaTwitter size={14} /></span>
                        <span className="p-2 rounded-full hover:bg-[#FEBC1E] cursor-pointer transition-all duration-200"><FaLinkedin size={14} /></span>
                        <span className="p-2 rounded-full hover:bg-[#FEBC1E] cursor-pointer transition-all duration-200"><FaInstagram size={14} /></span>
                    </div>
                </div>
                <hr className="border-0 h-[1px] bg-[#9999995e]" />
                <div className="sticky top-0 z-10 py-5 flex flex-wrap flex-col md:flex-row items-center">
                    <Link to="/" className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} width="50" alt="" />
                        <span className="ml-3 text-xl">Language Guard</span>
                    </Link >
                    <nav className="nav-menu md:ml-auto md:mr-4 md:py-1 md:pl-4 md:border-r md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className="default">Home</NavLink>
                        <NavLink to="/instructors" className="default">Instructors</NavLink>
                        <NavLink to="/classes" className="default">Classes</NavLink>
                        <NavLink to="/contact" className="default">Contact</NavLink>
                    </nav>
                    <Link to="/login"><button type="submit" className="primary-btn">Login</button></Link>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;