import './App.css';
import User from './User';
import React, {useRef} from 'react';

function App() {

  const inputRef = useRef(null);

  function handleUpdate(){
    inputRef.current.value = "1000";
    inputRef.current.style.backgroundColor = 'black';
    inputRef.current.style.color = 'red';
  }

  return (
    <div className="App">
      <h2>Forward Ref Example in React!</h2>
      <User ref={inputRef} />
      <button onClick={handleUpdate}>Update Property</button>
    </div>
  );
}

export default App;
