import logo from './logo.svg';
import './App.css';

function App() {

  function handleClick (){
    alert("Button Clicked!")
  }

  return (
    <div className="App">
      <h2>Hello Click Events in React!</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
