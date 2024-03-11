import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>    
    </div>
  );
}

export default App;
