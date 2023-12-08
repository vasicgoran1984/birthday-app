import { useAppContext } from "./Navbar"

const UserContainer = () => {

  const { user, logout } = useAppContext();

  return (
    <div className='user-container'>
        <p>Hello {user?.name}</p>
        <button className='btn' onClick={logout}>logout</button>
    </div>
  )
}

export default UserContainer