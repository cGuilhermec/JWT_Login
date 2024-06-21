import React, { createContext, useState } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

const initialThemeContext: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(initialThemeContext);

export const ThemeProvider = ({ children }: {children: React.ReactNode }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light' );
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )

};