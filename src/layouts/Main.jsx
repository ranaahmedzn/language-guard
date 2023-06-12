import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import useThemeContext from "../hooks/useThemeContext";
import useAuthInfo from "../hooks/useAuthInfo";
import Loading from "../pages/Loading/Loading";

const Main = () => {
    const { theme } = useThemeContext()
    const {loading} = useAuthInfo()

    if(loading){
        return <Loading />
    }
    
    return (
        <div className={`${theme === 'light' ? "white" : "bg-[#122033]"}`}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;