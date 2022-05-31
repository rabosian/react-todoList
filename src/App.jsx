import React, {useState} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';


function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const addItem = () => {
    setTodoList([...todoList, inputValue])
    setInputValue('')
  }

  const deleteItem = (id) => {
    setTodoList((prev) => {
      prev.filter((item,index) => {
        return index !== id
      })
    })
  }

  return (
    <main>
      <div className='header'>
        <h1>Todo List</h1>
        <input value={inputValue} type="text" placeholder='enter some text' onChange={(event)=> setInputValue(event.target.value)}/>
        <button className='add-btn' onClick={addItem}>Add</button>
      </div>
      <div>
        {todoList.map((item, index) => {
          return <TodoItem 
            key={index}
            id={index}
            item={item}
            deleteItem={deleteItem}
          />
        })}
      </div>
    </main>
  );
}

export default App;
