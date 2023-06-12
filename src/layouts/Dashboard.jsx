import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"
import useBookings from "../hooks/useBookings";
import './Dashboard.css'
import useUserRole from "../hooks/useUserRole";
import { FaBook, FaHome, FaUserCog, FaRegListAlt, FaTable, FaWallet, FaPenSquare } from "react-icons/fa";
import { MdChecklist} from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";

const Dashboard = () => {
    const [role] = useUserRole()
    const [bookings] = useBookings()

    return (
        <div className="w-full h-screen overflow-x-auto">
            <div className="hidden md:block">
                <div className="flex">
                    {/* dashboard sidebar */}
                    <div className="sticky top-0 w-72 h-screen pt-5 px-4 bg-yellow-200">
                        <Link to="/" className="flex font-medium items-center text-gray-900">
                            <img src={logo} width="50" alt="" />
                            <span className="ml-3 text-xl">Language Guard</span>
                        </Link >
                        <div className="pl-2 pt-5 pr-4">
                            <ul className="space-y-2 dashboard-menu">
                                {
                                    role.isStudent && <>
                                        <li>
                                            <NavLink to='/dashboard/mySelectedClasses' className="dashboard-menu-item">
                                                <span className="flex items-center space-x-2">
                                                    <MdChecklist />
                                                    <span >My Selected Classes</span>
                                                </span>
                                                <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">{bookings.length}</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/myEnrolledClasses' className="dashboard-menu-item">
                                                <FaBook />
                                                <span>My Enrolled Classes</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/paymentHistory' className="dashboard-menu-item">
                                                <FaWallet />
                                                <span>Payment History</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/feedback' className="dashboard-menu-item">
                                                <FaPenSquare />
                                                <span>Give Feedback</span>
                                            </NavLink>
                                        </li>
                                    </>
                                }
                                {
                                    role.isInstructor && <>
                                        <li>
                                            <NavLink to='/dashboard/addClass' className="dashboard-menu-item">
                                                <TbLayoutGridAdd size={18} />
                                                <span>Add a Class</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/myClasses' className="dashboard-menu-item">
                                                <FaRegListAlt />
                                                <span>My Classes</span>
                                            </NavLink>
                                        </li>
                                    </>
                                }

                                {
                                    role.isAdmin && <>
                                        <li>
                                            <NavLink to='/dashboard/manageClasses' className="dashboard-menu-item">
                                                <FaTable />
                                                <span>Manage Classes</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/manageUsers' className="dashboard-menu-item">
                                                <FaUserCog />
                                                <span>Manage Users</span>
                                            </NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                        <NavLink to='/' className="primary-btn flex items-center gap-2 justify-center py-3 w-[calc(100%-32px)] absolute left-4 bottom-4">
                            <FaHome />
                            <span>Back to Home</span>
                        </NavLink>
                    </div>

                    {/* dashboard content */}
                    <div className="m-7 w-2/3 flex-grow">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;