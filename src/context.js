import { createContext, useContext, useState } from "react";

// Global Hook
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

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

export default AppContext;