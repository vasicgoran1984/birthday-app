import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No Tours</h2>
        <div className="underline"></div>
        <button className='btn' onClick={fetchTours}>Refersh</button>
      </div>
    </main>
  }

  if (isLoading) {
    return <main>
      <h3>Loading....</h3>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
}

export default App
