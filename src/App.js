import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js';

const styles = {
  disabledButton: {
      backgroundColor: 'gray',
      color: 'white',
      cursor: 'not-allowed',
      border: "none",
      boxShadow: "0px 0px 10px 0px grey",
  },
  enabledButton: {
      cursor: 'pointer',
  },
};

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const onInsertColor = (e) => {
    let newColor = e.target.value;
    console.log(newColor);
    setColor(newColor);
    if (newColor !== '') {
      setButtonDisabled(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.log(error);
    }
      
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' 
            value={color}   
            onChange={onInsertColor} 
            placeholder='#f15025'
            className={`${error?'error':null}`}
          />
          <button 
            className='btn' 
            type='submit'
            style={isButtonDisabled ? styles.disabledButton : styles.enabledButton}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        <h4>list goes here</h4>
        {list.map((color, index) => {
          const hex = color.hex;
          // console.log(index);
          return <SingleColor key={index} index={index} {...color} hexColor={color.hex}/>
        })}
      </section>
    </>
  );
}

export default App
