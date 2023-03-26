import { createContext, useEffect, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: (value: any) => void;
    setLightTheme: (value: any) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer,
        colorScheme === 'dark' ? darkTheme : lightTheme,
    );

    useEffect(() => {
        colorScheme === 'dark' ? setDarkTheme() : setLightTheme();
    }, [colorScheme]);

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('setDarkTheme');
    };

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('setLightTheme');
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
