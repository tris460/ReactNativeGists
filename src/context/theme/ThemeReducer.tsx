import { Theme } from "@react-navigation/native";

type ThemeAction = 
    {type: 'setLightTheme'} |
    {type: 'setDarkTheme'};

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: '#f9c',
    dark: false,
    colors: {
        primary: '#f9c',
        background: '#fff',
        card: 'orange',
        text: '#000',
        border: 'green',
        notification: 'pink',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: '#f9c',
    dark: true,
    colors: {
        primary: '#f9c',
        background: '#000',
        card: 'orange',
        text: '#fff',
        border: 'green',
        notification: 'pink',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction):ThemeState => {
    switch(action.type) {
        case 'setDarkTheme':
            return {...darkTheme}
        case 'setLightTheme':
            return {...lightTheme};
        default:
            return {...lightTheme};
    }
}