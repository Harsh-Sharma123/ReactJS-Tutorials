import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      count: 1
    }
  }
  render(){
    console.log("Re-Render Check!");
    return (
      <>
        <div className='App'>
          <h2>Pure Component Demo in React</h2>
          <h4>Count : {this.state.count}</h4>
          <button onClick={()=>this.setState({count: this.state.count})}>Click Me</button>
        </div>
      </>
    )
  }
}

export default App;
