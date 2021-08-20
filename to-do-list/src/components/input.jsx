import React, {useState} from 'react';

const Input = (props)=>{
    const [inputText, inputTextSet] = useState(''); 
    const eventHandleChanges = (event)=>{
        const newInput = event.target.value;
        setInputText(newInput);
    }
    return(
        <div className="form">
            <input type = "text" onChange={handleChange} value={inputText} />
            <button onClick={() =>{
                props.onAdd(inputText);
                setTextSet("");
            }}>
                <span>Add</span>
            </button>

        </div>
    )
}

export default Input; 