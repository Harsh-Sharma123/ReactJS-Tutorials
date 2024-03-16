import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const names = ['a', 'b', 'c', 'd'];

  return (
    <div className="App">
     <h2>Arrays in React JS</h2>
     {
      names.map((name)=>{
        return <h3>{name}</h3>
      })
     }
    </div>
  );
}

export default App;
