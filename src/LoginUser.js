import React from 'react'
import { useGlobalContext } from './context'

const LoginUser = () => {
    const { user, login, name, setName, logout } = useGlobalContext();

  if (!user.name) {
        return (
            <form onSubmit={login}>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <button type='submit' className='btn'>Login</button>
            </form>
          )
    } else {
        return (
            <button onClick={logout} className='btn'>Logout</button>
          )
    }
}

export default LoginUser