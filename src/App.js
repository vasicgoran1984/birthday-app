import React from 'react'
import Container from './components/Container'
import Login from './components/Login'
import { useGlobalContext } from './context';
import NewUser from './components/NewUser';
import Users from './components/Users';

function App() {
  const { userName } = useGlobalContext();
  
  return (
    <>
    <NewUser />
    <Users />
    </>
  )
}

export default App
