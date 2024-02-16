import logo from './logo.svg';
import './App.css';
import Users from './Users';
import React from 'react';

// Example of JSX
function Apple(){
  return React.createElement('h3', null, 'Hello from JSX Function!')
}

function App() {
  return (
    <div className="App">
     <Users />
     <Apple />
    </div>
  );
}

export default App;
