
import './App.css';

import { useState } from "react";
function App() {
    const [item,setItem] = useState("");  
      const [items,setItems] = useState([]);


   function addItem(){
    
    /* items is a object and it have 2 properity. 
       id is unique for each element in array and value is our string expression 
       which comes from input */ 
    const items = {
      id: Math.floor(Math.random * 1000),
      value: item,
    }

    setItems(oldItems => [...oldItems,items])
    setItem("")
  }

  /* This variable have same function with document.createElement in Javascript */ 
  const newItemList = items.map((item) => 
      {return <li key={item.id}>{item.value}</li>})

  
  /* I have taken the text with onChange from inputField
      Then, I used setItem to take the text */ 



return (
    <div className="App">
      <h3>Todo List App</h3>

    
      <input
        type="text"
        placeholder='Add a item'
      
       onChange  = {e => setItem(e.target.value)}
      />

     <br></br>
      <button onClick={() => addItem()}> Add </button>
     
      <ul>
        <li>Evden gel</li>
        <li>5 litre su iç</li>
        <li>Düzenli şekilde koşu yap</li>
       {newItemList}
      </ul>
    </div>
  );
}

export default App;
