import React, { useEffect, useState } from 'react'
import Lists from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }

}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false, 
    msg:'', 
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name) {
      // Display alert
      showAlert(true, 'danger', 'Please enter a value')
    } else if (name && isEditing) {
      // Edit
      setList(list.map((item) => {
        
        if (item.id === editID) {
          return {...item, title: name}
        }
        return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true,'success', 'Value changed!');
    } else {
      // Show alert
      showAlert(true, 'success', 'New Item Added!');
      const newItem = {id: new Date().getTime().toString(),
        title: name
      };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, type="", msg="") => {
      setAlert({show, type, msg})
  }

  const clearList = () => {
    showAlert(true, 'danger', 'You deleted all items!');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Deleted item');
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  })

  return (
    <section className='section-center'>
      <form action='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert msg={alert.msg} type={alert.type} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type='text'
            className='grocery' 
            placeholder='e.g. eggs' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />

          <button type='submit' className='submit-btn'>
            {isEditing? 'edit' : 'submit'}
          </button>

        </div>
      </form>
      {list.length > 0 && 
        <div className='glocery-container'>
        <Lists items={list} removeItem={removeItem} editItem={editItem} />
        <button className='clear-btn' onClick={clearList}>Clear items</button>
      </div>
      }
  </section>
  );
  
}

export default App
