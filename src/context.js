import { createContext, useContext, useState } from "react";

// Global Hook
const GlobalContext = createContext();

const AppContext = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({name: ''});
    const [name, setName] = useState('');

    const login = (e) => { 
        e.preventDefault();
        console.log('dd')
        setUser({name: name})
    }

    const logout = () => {
        setUser('');
        setName('');
    }

    return <GlobalContext.Provider
        value={{
            userName,
            setUserName,
            login,
            user,
            name,
            setName,
            logout,
        }}
    >
        {children}    
    </GlobalContext.Provider>
}

export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;