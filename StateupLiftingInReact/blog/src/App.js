import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  function parentAlert(data){
    alert("Hello "+ data);
  }

  return (
    <div className="App">
      <h2>State-Up Lifting in ReactJS</h2>
      <User data={parentAlert} />
    </div>
  );
}

export default App;
