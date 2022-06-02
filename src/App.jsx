import React, { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import TodoItem from './components/TodoItem';

function App() {
  const [items, setItems] = useState([])

  const addItem = (inputValue) => {
    if (!inputValue) {
      alert('Enter an item')
      return
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue
    }
    setItems(prev => [...prev, item])
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
        <InputArea addItem={addItem} />
        <div>
          <ul>
            {items.map(item => {
              return (<TodoItem item={item} deleteItem={deleteItem} />)
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;