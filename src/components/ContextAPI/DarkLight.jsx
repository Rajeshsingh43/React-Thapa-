import { createContext, useState, useContext } from "react";


export const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}

        </ThemeContext.Provider>
    )

}

//creating a components
export const DarkLight = () => {

    const { theme, handleToggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1
                className={` p-4 flex h-lvh flex-col justify-center items-center  ${theme === "dark" ? "bg-gray-800" : "bg-white"
                    } `}>Dark Light Mode Website</h1>
            <p
                className={`p-4 flex flex-col justify-center items-center   ${theme === "light" ? "text-gray-800" : "text-white"
                    }`}
            >
                Hello ! My React v19 Fans</p>
            <button onClick={handleToggleTheme}
                className="bg-blue-500 hover:bg-blue text-white rounded-md p-4 "
            >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                {theme === "dark" ? "switch to light mode" : "switch to dark mode"}
            </button>
        </div>
    )
}