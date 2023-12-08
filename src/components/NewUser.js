import React from 'react'
import { useGlobalContext } from '../context'
import LoginUser from '../LoginUser';

const NewUser = () => {

    const { userName, user } = useGlobalContext();

  return (
    <>
        <div>Hello {user.name}</div>
        <LoginUser />
    </>
    
  )
}

export default NewUser