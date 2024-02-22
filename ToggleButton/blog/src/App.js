import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick = { () => setShow(!show) }>Toggle Button</button>
      <button onClick={ () => setShow(true) }>Show Button</button>
      <button onClick={ () => setShow(false) }>Hide Button</button>
      { show ? <h1>Hello World!</h1> : <></>}
    </div>
  );
}

export default App;
