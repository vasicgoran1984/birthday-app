import React from 'react'
import Container from './components/Container'
import Login from './components/Login'
import { useGlobalContext } from './context';

function App() {
  const { userName } = useGlobalContext();
  console.log(userName, 'x');
  return (
    <>
      <Container />
    </>
  )
}

export default App
