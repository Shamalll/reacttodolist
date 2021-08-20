import React, {useState} from 'react';
import './App.css';
import { Input } from "./components/input"; 

function App() {
  const [theItems, setTheItems] = useState([]); 
  return (
    <div className="container">
      <div className="header">
        <h1>To do list</h1>
      </div>
      <br></br>
      
      <input />
    </div>
  );
}

export default App;
