import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    console.log("Constructor Called!");
    this.state = {
      count: 1
    }
  }

  shouldComponentUpdate(){
    console.log("Should Component Update!");
    if(this.state.count < 10) return true;
    else return false;
  }

  render(){
    console.log("Render Method!");
    return (
      <>
        <div className='App'>
          <h2>Hello - Should Component Update Demo</h2>
          <h3>Count : {this.state.count}</h3>
          <button onClick={()=>this.setState({count: this.state.count+1})}>Update Count</button>
        </div>
      </>
    )
  }

}

export default App;
