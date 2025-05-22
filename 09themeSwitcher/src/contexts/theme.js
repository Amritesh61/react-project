import { createContext, useContext } from "react";
import ThemeBtn from "../components/ThemeBtn";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})
export const  ThemeProvider  = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}