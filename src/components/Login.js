import React from 'react'
import { useAppContext } from './Container'



const Login = () => {

    const { user, login, setName, name } = useAppContext();

    if (!user.name) {
        return (
            <form onSubmit={login}>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <button className='btn'>Login</button>
            </form>
          )
    }
  
}

export default Login