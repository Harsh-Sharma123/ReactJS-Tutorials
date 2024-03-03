import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  
  constructor(){  
    super();
    console.log("Constructor Console");
  }

  render(){

    console.log("Render Console");

    return (
      <>
        <h2>Hello World!</h2>
      </>
    )
  }
}

export default App;
