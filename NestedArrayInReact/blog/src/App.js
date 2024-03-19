import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const people = [
    {name : 'a', age: '23', email: 'a@gmail.com', address: [
      { city: 'Haridwar', state: 'Uttarakhand', country: 'India'}
    ]},
    {name: 'b', age: 24, email: 'b@gmail.com', address: [
      { city: 'Delhi', state: 'Delhi', country: 'India'}
    ]},
    {name: 'c', age: 25, email: 'c@gmail.com', address: [
      { city: 'Gurgaon', state: 'Haryana', country: 'India'}
    ]},
    {name: 'd', age: 26, email: 'd@gmail.com', address: [
      { city: 'Bangalore', state: 'Karnataka', country: 'India'}
    ]}  
  ]
  return (
    <div className="App">
      <table>
        <thead>
          <th>S.No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
        </thead>
        <tbody>
          {
            people.map((person, idx) => (
              <tr key={idx}>
                <td>{idx+1}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.email}</td>
                {
                  person.address.map((address, i)=>(
                    <td key={i}>{address.city},{address.state},{address.country}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
