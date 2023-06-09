import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Dashboard = () => {
    // const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full h-screen overflow-x-auto">
            {/* <button onClick={() => setIsOpen(!isOpen)} className="primary-btn md:hidden">Open Sidebar</button>
             */}

            <div className="hidden md:block">
                <div className="w-72 h-screen pt-5 px-4 bg-yellow-200">
                    <Link to="/" className="flex font-medium items-center text-gray-900">
                        <img src={logo} width="50" alt="" />
                        <span className="ml-3 text-xl">Language Guard</span>
                    </Link >
                    <div className="pl-2 pt-5 pr-8">
                        <ul className="space-y-2">
                            <li>
                                <Link className="dashboard-menu-item bg-gray-500 bg-opacity-20">
                                    <span className="flex items-center space-x-2">

                                        <span >My Selected Classes</span>
                                    </span>
                                    <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">3</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="dashboard-menu-item">
                                    <span>My Enrolled Classes</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;