import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {

  function Apple(){
    return (
      <h2>Apple Component - Component inside Component!</h2>
    )
  }

  return (
    <div className="App">
     <Users />
     <Apple />
    </div>
  );
}

export default App;
