import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react';

function App() {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  function handleSubmit(e){
    e.preventDefault();
    console.log(inputRef1.current.value);
    console.log(inputRef2.current.value);
    const input3 = document.getElementById("3");
    console.log(input3.value);
  }

  return (
    <div className="App">
      <h2>Uncontrolled Components!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef1} />
        <input type="text" ref={inputRef2} />
        <input type="text" id="3" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
