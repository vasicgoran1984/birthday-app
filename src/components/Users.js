import React, { useState } from 'react'
import { data } from '../data';
import { clear } from '@testing-library/user-event/dist/clear';

const Users = () => {

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople);
    }

    const resetPeople = () => {
        setPeople(data);
    }

    const clearAll = () => {
        setPeople([]);
    }

    if (people < 1) {
        return (
            <button className='btn' onClick={resetPeople}>Reset</button>
        )
    }

  return (
    <div>
        {people.map((person) => {
            const { id, name } = person;


            return (
                <div style={{marginLeft: '15px'}} key={id}>
                    <h4>{name}</h4>
                    <button className='btn' onClick={() => removeItem(id)}>remove</button>
                </div>
            )
        })}
        <button className='btn' onClick={clearAll}>Clear</button>
    </div>
  )
}

export default Users