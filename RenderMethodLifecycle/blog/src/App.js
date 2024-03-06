import logo from './logo.svg';
import './App.css';
import User from './User';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <User count={count} />
      <button onClick={()=>setCount(count+1)}>Count++</button>
    </div>
  );
}

export default App;
