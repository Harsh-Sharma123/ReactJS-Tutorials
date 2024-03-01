import logo from './logo.svg';
import './App.css';
import User from './User';
import Member from './Member';

function App() {
  
  function getData(){
    alert("Hello Function!");
  }

  return (
    <div className="App">
      <User data={getData} />   
      <Member data={getData} /> 
    </div>
  );
}

export default App;
