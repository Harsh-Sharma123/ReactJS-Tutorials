import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import User from './Users';

function App() {

  const [data, setData] = useState(0);
  const [count, setCount] = useState(100);

  useEffect(()=>{
    console.log("Data State UseEffect!");
  }, [data])

  useEffect(()=>{
    console.log("Count State UseEffect!");
  }, [count])

  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <h2>Data : {data}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>

      <User data={data} count={count} />
    </div>
  );
}

export default App;
