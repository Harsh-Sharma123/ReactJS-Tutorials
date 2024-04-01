import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [val, setVal] = useState('');

  return (
    <div className="App">
      <h2>Controlled Components in React!</h2>
      <h3>{val}</h3>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
    </div>
  );
}

export default App;
