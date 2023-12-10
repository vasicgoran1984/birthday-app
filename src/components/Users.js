import React, { useReducer, useState } from 'react'
import { data } from '../data';
import { clear } from '@testing-library/user-event/dist/clear';

const defaultState = {
    people:data,
    isLoader: '',
}

const reducer = (state, action) => {
    
    if (action.type === 'CLEAR_LIST') {
        return {...state, people: []}
    }

    if (action.type === 'RESET_LIST') {
        return {...state, people: data}
    }

    if (action.type === 'REMOVE_ITEM') {
        console.log(action);
        let newPeople = state.people.filter((person) => person.id !== action.payload.id)
        return {...state, people: newPeople}
    }

    return state;
}

const Users = () => {

    //We use useReducer instead useState
    const [state, dispatch] = useReducer(reducer, defaultState);

    // We do not need this
    // const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: {id}})
        // let newPeople = people.filter((person) => person.id !== id)
        // setPeople(newPeople);
    }

    const resetPeople = () => {
        dispatch({type: 'RESET_LIST'})
        // setPeople(data);
    }

    const clearAll = () => {
        dispatch({type: 'CLEAR_LIST'})
        // setPeople([]);
    }

    if (state.people < 1) {
        return (
            <button className='btn' onClick={resetPeople}>Reset</button>
        )
    }

    console.log(state);

  return (
    <div>
        {state.people.map((person) => {
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