import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [check, setCheck] = useState(false);

  const formsubmitted = (e) => {
    console.log(name, interest, check);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handling Form in React JS</h1>
      <form onSubmit={formsubmitted}>
        <input type="text"  onChange={(e) => setName(e.target.value)} /><br /><br />
        <select onChange={(e) => setInterest(e.target.value)} >
          <option>Select one Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />Accept Terms and Condition <br /><br />
        <input type="Submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
