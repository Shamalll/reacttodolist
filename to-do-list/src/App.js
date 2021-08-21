import React, {useState} from 'react';
import './App.css';
import { input } from "./components/input";
import todoitem from "./components/todoitems"; 

function App() {
  const [theItems, setTheItems] = useState([]); 

  const itemsAdded = (inputText) => {
    setTheItems((prevtheItems)=> {
      return [...prevtheItems, inputText];
    })
  }

const deletedItems = (id) => {
  setTheItems((prevtheItems)=>{
    return prevtheItems.filter((item, index)=> {
      return index !== id;
    })
  })
}

  return (
    <div className="container">
      <div className="header">
        <h1>To do list</h1>
      </div>
      <input onAdd={itemsAdded}/>
      <div>
        <ul>
        {theItems.map((item, index)=> (
        <todoitem key={index} id={index} text= {item} onChecked={deletedItems} />
          ))}
            </ul>
      </div>
    </div>
  );
}

export default App;
