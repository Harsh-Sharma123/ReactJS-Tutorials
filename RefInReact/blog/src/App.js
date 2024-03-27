import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createRef } from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.inputRef = createRef();
  }

  componentDidMount(){
    // console.log(this.inputRef);
  }

  getVal(){
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.backgroundColor = 'black';
    this.inputRef.current.style.color = 'red';
  }

  render(){
  return (
    <div className="App">
      <h2>Ref in React</h2>
      <input type="text" ref={this.inputRef} />
      <button onClick={()=>this.getVal()}>Get Value</button>
    </div>
  );
}
}

export default App;
