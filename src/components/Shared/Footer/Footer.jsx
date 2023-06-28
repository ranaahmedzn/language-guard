import Container from "../../Container/Container";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneVolume, FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";

import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        setTimeout(() => {
            event.target.reset()
            Swal.fire(
                'Subscribed!',
                'Thanks for your subscription!',
                'success'
            )
        }, 700)
    }

    return (
        <footer className="bg-[#111111] text-gray-600">
            <Container>
                <div className="px-4 md:px-0">
                    <div className="py-8 flex flex-col items-center md:flex-row justify-between">
                        <Link className="flex font-medium items-center md:justify-start justify-center text-[#999999]">
                            <img src={logo} width="50" alt="" />
                            <span className="ml-3 text-3xl text-white">Language Guard</span>
                        </Link>
                        <div className="w-full md:w-2/3 mt-5 md:mt-0 flex flex-col md:flex-row items-center gap-4">
                            <p className="text-2xl font-semibold text-[#AEB2C2]">Subscribe to our Newsletter!</p>
                            <form onSubmit={handleSubscribe} className="w-full md:w-1/2 ml-auto">
                                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                                        <FaEnvelope className="text-xl text-[#9CA3AF]" />
                                    </div>
                                    <input type="search" id="search" className="my-0 block w-full p-4 pl-12 text-sm text-gray-900 border-gray-50 rounded-full bg-gray-50 focus:border-[#FEBC1E] focus:ring-[#FEBC1E] focus:outline-none placeholder:text-[#9CA3AF] font-medium" placeholder="Enter your email" required />

                                    <button type="submit" className="flex items-center gap-1 text-black absolute right-1 top-[4px] bg-[#FEBC1E] focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3"><TbLocationFilled /> Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <hr className="border-0 h-[1px] bg-[#9999995e]" />

                    <div className="py-10 md:py-20 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <div className="col-span-2">
                            <h2 className="text-xl font-medium text-white mb-5">Contacts</h2>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <FaPhoneVolume size={24} className="text-[#FEBC1E]" />
                                    <div>
                                        <p className="text-[#AEB2C2] text-sm">Call Anytime</p>
                                        <p className="text-base font-semibold text-white">+555 777 0000</p>
                                    </div>
                                </div>
                                <hr className="border-0 mt-3 mb-4 w-3/4 h-[1px] bg-[#9999995e]" />

                                <div className="flex gap-4 items-center">
                                    <FaEnvelopeOpenText size={24} className="text-[#FEBC1E]" />
                                    <div>
                                        <p className="text-[#AEB2C2] text-sm">Send Email</p>
                                        <p className="text-base font-semibold text-white">info@language.guard.com</p>
                                    </div>
                                </div>
                                <hr className="border-0 mt-3 mb-4 w-3/4 h-[1px] bg-[#9999995e]" />

                                <div className="flex gap-4 items-center">
                                    <FaMapMarkerAlt size={24} className="text-[#FEBC1E]" />
                                    <div>
                                        <p className="text-[#AEB2C2] text-sm">Visit School</p>
                                        <p className="text-base font-semibold text-white">102 Street, California, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-medium text-white mb-5">NavLinks</h2>
                            <nav className="list-none mb-10 text-[#AEB2C2] space-y-3">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/instructors'>Instructors</Link>
                                </li>
                                <li>
                                    <Link to='/classes'>Classes</Link>
                                </li>
                                <li>
                                    <Link>About Us</Link>
                                </li>
                                <li>
                                    <a href='/#contact'>Contact</a>
                                </li>
                            </nav>
                        </div>
                        <div>
                            <h2 className="text-xl font-medium text-white mb-5">Top Courses</h2>
                            <nav className="list-none mb-10 text-[#AEB2C2] space-y-3">
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Instructor</Link>
                                </li>
                                <li>
                                    <Link>Courses</Link>
                                </li>
                                <li>
                                    <Link>About Us</Link>
                                </li>
                                <li>
                                    <Link>Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div>
                            <h2 className="text-xl font-medium text-white mb-5">Supports</h2>
                            <nav className="list-none mb-10 text-[#AEB2C2] space-y-3">
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Instructors</Link>
                                </li>
                                <li>
                                    <Link>Classes</Link>
                                </li>
                                <li>
                                    <Link>About Us</Link>
                                </li>
                                <li>
                                    <Link>Contact</Link>
                                </li>
                            </nav>
                        </div>


                    </div>
                </div>
            </Container>
            <hr className="border-0 h-[1px] bg-[#9999995e]" />

            <Container >
                <div className="py-3 md:py-5 flex items-center gap-3 flex-wrap flex-col-reverse sm:flex-row">
                    <p className="text-[#999999] text-sm font-medium text-center sm:text-left">© 2023 Language Guard | All right reserved </p>

                    <div className="flex gap-4 sm:ml-auto sm:mt-0 mt-2 sm:justify-start">
                        <FaFacebook size={20} />
                        <FaTwitter size={20} />
                        <FaLinkedin size={20} />
                        <FaInstagram size={20} />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;