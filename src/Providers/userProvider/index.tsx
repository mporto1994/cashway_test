import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({});

interface UserProviderProps{
    children:ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
    const [User , setUser] = useState({});

    return (
        <UserContext.Provider value={{User}}>
            {children}
        </UserContext.Provider>
    );
}