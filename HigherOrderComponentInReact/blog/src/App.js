import logo from './logo.svg';
import './App.css';
import HOCGreen from './HOC';
import HOCRed from './HOCRed';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component In ReactJS</h2>
      <HOCGreen comp={Counter} />
      <HOCRed comp={Counter} />
    </div>
  );
}

export default App;
