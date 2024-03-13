import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("UseEffect Called!");
  });

  return (
    <div className="App">
      <h2>UseEffect Example In ReactJs</h2>
      <h4>Counter : {count}</h4>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  );
}

export default App;
