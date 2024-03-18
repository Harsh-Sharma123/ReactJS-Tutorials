import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const people = [
    { name: 'a', age: 20, email: 'a@gmail.com' },
    { name: 'b', age: 22, email: 'b@gmail.com' },
    { name: 'c', age: 23, email: 'c@gmail.com' },
    { name: 'd', age: 24, email: 'd@gmail.com' }
  ]
  return (
    <div className="App">
      <table border="2">
        <thead border="2">
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </thead>
        <tbody border="1">
          {people.map((person) => (
            <tr border="2">
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
