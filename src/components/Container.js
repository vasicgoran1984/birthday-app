import React, { createContext, useContext, useState } from 'react'
import Login from './Login';

export const ContainerContext = createContext();

//Custom Hook
export const useAppContext = () => useContext(ContainerContext);

const Container = () => {

    const [user, setUser] = useState({name: ''});
    const [name, setName] = useState('');
    
    const login = (e) => {
        e.preventDefault();
        setName(name);
        setUser({name: name})
    }

  return (
    <ContainerContext.Provider value={{
        user,
        login,
        name,
        setName,
    }}>
        <main>
            <p>Hello {user.name}</p>
        </main>
        <Login />
    </ContainerContext.Provider>
  )
}

export default Container