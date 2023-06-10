import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthInfo = () => {
    const authInfo = useContext(AuthContext)
    return authInfo;
};

export default useAuthInfo;