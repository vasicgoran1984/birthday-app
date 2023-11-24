import React, { useState } from 'react';
import data from './data';
import List from './List';
import UserList from './UserList';

function App() {
  const [people, setPeople] = useState(data);

  // console.log(people);

  if (people.length === 0) {
    return <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <button onClick={() => setPeople(data)}>Refresh</button>
      </section>
    </main> 
  }

//   return <main>
//   <section className='container'>
//     <h3>{people.length} birthdays today</h3>
//     <List people={people} />
//     <button onClick={() => setPeople([])}>clear all</button>
//   </section>
// </main>
  
  return (
    <main>
      <section className='container'>
        {people.map((person) => {
          return (
            <UserList key={person.id} {...person} />
          )
        })}
        <button onClick={() => setPeople([])} className='btn'>Clear all</button>
      </section>
    </main>
  )

}

export default App;
