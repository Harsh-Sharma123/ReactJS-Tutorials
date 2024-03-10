import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      show: true
    }
  }

  render(){
    return(
      <>
        <div className='App'>
          { this.state.show ? <Student /> : <h2>Child Component Removed!</h2> }
          <button onClick = {()=>this.setState({show: !this.state.show})}>Toggle Component</button>
        </div>
      </>
    )
  }
}

export default App;
