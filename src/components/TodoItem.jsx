import React, {useState} from 'react'
import '../App.css'

function TodoItem(props) {
    const [isDone, setIsDone] = useState(false)
    return (
        <div 
            className="todo-item"
            // onClick={()=>{
            //     props.deleteItem(props.id)
            // }}
            onClick={()=>{
                setIsDone(prev => !prev)
            }}
            style={{textDecoration: isDone && "strike-through"}}
        >
        {props.item}
        </div>
    )
}

export default TodoItem