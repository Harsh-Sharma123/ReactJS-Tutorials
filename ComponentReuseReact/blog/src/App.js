import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  const users = [
    {name: 'A', age: 22, email: 'a@gmail.com'},
    {name: 'B', age: 23, email: 'b@gmail.com'},
    {name: 'C', age: 24, email: 'c@gmail.com'},
    {name: 'D', age: 25, email: 'd@gmail.com'}
  ]

  return (
    <div className="App">
      <h2>Reuse Components in ReactJS</h2>
      {
        users.map((user)=>(
          <User data={user} />
        ))
      }
    </div>
  );
}

export default App;
