import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    console.log("Constructor!");

    this.state = {
      name: 'Harsh'
    }

  }

  componentDidMount(){
    console.log("Component Did Mount!")
  }

  render(){
    console.log("Render Method!");

    return (
      <>
        <div className='App'>
          <h2>Hello - Component Did Mount Demo</h2>
          <h3>Name : {this.state.name}</h3>
          <button onClick={()=>this.setState({name: 'Harsh Sharma'})}>Update Name</button>
        </div>
      </>
    )

  }

}

export default App;
