import logo from './logo.svg';
import './App.css';
import Reatc, {useRef} from 'react';

function App() {

  const inputRef = useRef(null);

  function handleInput(){
    console.log("Function Called!");
    inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.style.color = 'red';
  }

  return (
    <div className="App">
      <h3>UseRef Example in React!</h3>
      <input type='text' ref={inputRef} />
      <button onClick={handleInput}>Handle Button</button>
    </div>
  );
}

export default App;
