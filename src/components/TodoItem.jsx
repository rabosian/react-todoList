import React, { useState } from 'react'
import '../App.css'

function TodoItem(props) {
    return (  
        <li key={props.id}>{props.item.value}
            <button className='delete-btn' onClick={() => props.deleteItem(props.item.id)}>❌</button>
        </li>
    )
}

export default TodoItem