import React, { useState } from 'react'

function InputArea(props) {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='form'>
            <input
                type="text"
                placeholder='enter todos'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)} />
            <button 
                className='add-btn' 
                onClick={() => {
                    props.addItem(inputValue)
                    setInputValue("")
                }}
            >
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea 