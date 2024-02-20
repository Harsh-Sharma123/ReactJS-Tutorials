import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Student from './Student';

function App() {

  const [name, setName] = useState('Harsh');

  return (
    <div className="App">
      <Student name={name} />
      <button onClick={()=>setName('Harsh Sharma')}>Click Me</button>
    </div>
  );
}

export default App;
