import React, {useState} from 'react';
import './App.css';
import { Input } from "./components/input"; 

function App() {
  const [theItems, setTheItems] = useState([]); 

  const itemsAdded = (inputText) => {
    setTheItems((prevtheItems)=> {
      return [...prevtheItems, inputText];
    })
  }
  return (
    <div className="container">
      <div className="header">
        <h1>To do list{theItems}</h1>
        <button onClick={() => setTheItems((prev) => prev + 1)}>Click</button>
      </div>
      <br></br>
      
      <input onAdd={itemsAdded} />
    </div>
  );
}

export default App;
