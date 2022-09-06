import React, {useState} from "react";
import "../App.css";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false)

  return (
    <li 
      key={props.id}
      style={{
        cursor: "pointer",
        textDecoration: isDone && 'line-through'
      }}
      onClick={() => setIsDone(prev => !prev)}
    >
      {props.item.value}
      <button
        className="delete-btn"
        onClick={() => props.deleteItem(props.item.id)}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
