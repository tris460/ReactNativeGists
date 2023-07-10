import { createContext, useReducer } from "react";
import { ThemeState, lightTheme, themeReducer } from "./ThemeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
    const [theme, dispatch] = useReducer(themeReducer, lightTheme);

    const setDarkTheme = () => {
        dispatch({type: 'setDarkTheme'});
    }

    const setLightTheme = () => {
        dispatch({type: 'setLightTheme'});
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}