import { createContext } from "react";

// Define hoy will look like the general data
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
}

// Define which properties will be shared to the children, in case we don't want to
// add all of AuthState or we want to add more
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void;
}

// Initial state
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
}

// Create context, it has the data that will be shared in all children components
export const AuthContext = createContext({} as AuthContextProps);

// State provider component
export const AuthProvider = ({children}: any) => {
    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    );
}
