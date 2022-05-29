import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';


function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }


  return (
    <main>
      <div className='header'>
        <h1>Todo List</h1>
        <input value={inputValue} type="text" onChange={(event)=> setInputValue(event.target.value)}/>
        <button onClick={addItem}>Add</button>
      </div>

      <TodoBoard todoList={todoList}/>

    </main>
  );
}

export default App;
