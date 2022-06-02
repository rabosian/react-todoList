import React, { useState } from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])

  const addItem = () => {
    if (!inputValue) {
      alert('Enter an item')
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue
    }
    setItems(prev => [...prev, item])
    setInputValue('')
  }

  const deleteItem = (id) => {
    const newList = items.filter(item => item.id !== id)
    setItems(newList)
  }

  return (
    <main>
      <div className='container'>
        <div className='header'>
          <h1>Todo List</h1>
        </div>
        <div className='form'>
          <input
            type="text"
            placeholder='enter todos'
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} />
          <button className='add-btn' onClick={addItem}>
            <span>Add</span>
          </button>
        </div>

        <div>
          <ul>
            {items.map(item => {
              return <li key={item.id}>{item.value} <button className='delete-btn' onClick={() => deleteItem(item.id)}>❌</button></li>
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
