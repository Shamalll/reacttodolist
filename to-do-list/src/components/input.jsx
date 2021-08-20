import React, {useState} from 'react';

const Input = (props)=>{
    const [inputText, inputTextSet] = useState(''); 
    const eventHandleChanges = (event)=>{
        const newInput = event.target.value;
        inputTextSet(newInput);
    }
    return(
        <div className="form">
            <input type = "text" onChange={eventHandleChanges} value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                inputTextSet("");
            }}> <span>Add</span></button>

        </div>
    )
}

export default Input; 