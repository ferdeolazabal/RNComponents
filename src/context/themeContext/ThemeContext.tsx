import React, { createContext } from 'react';

interface ThemeContextProps {
    theme: any;
    setDarkTheme: (value: any) => void;
    setLightTheme: (value: any) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    const theme = {};
    const setDarkTheme = (value: any) => {
        console.log('setDarkTheme');
    };
    const setLightTheme = (value: any) => {
        console.log('');
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setLightTheme,
                setDarkTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
