import React from 'react'

const UserList = ({id, name, image, age}) => {
  return (
    <article key={id} className='person'>
        <img src={image} alt={name} />
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </article>
  )
}

export default UserList