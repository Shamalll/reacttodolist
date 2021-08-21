import React from "react";


const toDoItem = (props) => {
    return(
        <div onClick={()=>props.onChecked(props.id)}>
            <li>{props.text}</li>
        </div>
    )
}

export default toDoItem; 