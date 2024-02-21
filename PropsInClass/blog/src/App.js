import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "Harsh"
    }
  }
  render(){
    return (
      <>
      <div className='App'>
        <Student name={this.state.name} />
        <button onClick = {()=>this.setState({name: 'Harsh Sharma'})} >Update Name</button>
      </div>
      </>
    )
  }
}

export default App;
