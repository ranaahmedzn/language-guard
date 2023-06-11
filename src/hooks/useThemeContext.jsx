import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const useThemeContext = () => {
    const themeContext = useContext(ThemeContext)
    return themeContext;
};

export default useThemeContext;