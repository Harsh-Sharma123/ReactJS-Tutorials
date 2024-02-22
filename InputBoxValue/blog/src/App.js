import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [name, setName] = useState('');

  const change = (e)=>{
    e.preventDefault();
    setName(e.target.value);
  }
  return (
    <div className="App">
     <input onChange={change} />
     <h1>{name}</h1>
    </div>
  );
}

export default App;
