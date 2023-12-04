import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {

  const { openSidebar, openModal } = useGlobalContext()

  console.log(openSidebar);

  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars />
    </button>
    <button onClick={openModal} className='btn'>
      show modal
    </button>
  </main>
}

export default Home
