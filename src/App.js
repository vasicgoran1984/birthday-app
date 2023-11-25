import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState(data);
  // Fetch API
  // const fetchTours = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const tours = await response.json(); 
  //     setTours(tours);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Fetch API II
  const fetchUser = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data);
      })
  }  

  const removeTour = (id) => {
    console.log('remove');
    const newTours = user.filter((tour) => tour.id !== id)
    setUser(newTours)
  }

  useEffect(() => {
    fetchUser();
  }, []);

  // console.log(user);
  // console.log(users);

  return (
    <main>
      <Tours tours={user} removeTour={removeTour} />
    </main>
  )
}

export default App
