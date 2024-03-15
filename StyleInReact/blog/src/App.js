import logo from './logo.svg';
import './App.css';
import './style.css';
import style from './custom.module.css';

function App() {
  return (
    <div className="App">
      <h2 className='primary'>Style 1 in React JS using Style Sheet</h2>
      <h2 style={{backgroundColor: 'Black', color: 'red'}}>Style 2 in React JS using Inline Style Object</h2>
      <h2 className={style.primary}>Style 3 in React JS using Style Module CSS</h2>
    </div>
  );
}

export default App;
