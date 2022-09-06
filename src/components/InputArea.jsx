import React, { useState } from "react";

function InputArea(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="form">
      <input
        type="text"
        placeholder="enter todos"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.addItem(inputValue);
            setInputValue("");
          }
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addItem(inputValue);
          setInputValue("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
