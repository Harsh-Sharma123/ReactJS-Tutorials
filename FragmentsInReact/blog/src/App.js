import React from 'react';
import logo from './logo.svg';
import './App.css';
import Col from './Col';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <h1>React Fragments</h1>
      <table>
        <tbody>
          <tr><Col /></tr>
          <tr><Col /></tr>
          <tr><Col /></tr>
          <tr><Col /></tr>
        </tbody>
      </table>
      </div>
    </React.Fragment>
  );
}

export default App;
