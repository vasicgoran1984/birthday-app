import React from 'react'

const Dashboard = ({user}) => {
  console.log(user);
  return (
    <section>
      Hello {user?.name}
    </section>
  )
}

export default Dashboard