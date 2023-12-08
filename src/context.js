import { createContext, useContext, useState } from "react";

// Global Hook
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [userName, setUserName] = useState('Puser');
    return <GlobalContext.Provider
        value={{
            userName,
            setUserName
        }}
    >
        {children}    
    </GlobalContext.Provider>
}

export default AppContext;