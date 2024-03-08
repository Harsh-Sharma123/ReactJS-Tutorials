import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  
  constructor(){
    super();
    console.log("Constructor Method!");
    this.state = {
      count: 1
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Component Did Update!");
    console.log("Previous Props : ",prevProps);
    console.log("Previous State : ",prevState);
    console.log("Snapshot : ",snapshot);

    if(this.state.count < 10){
      this.setState({count: this.state.count+1});
    }
  }

  render(){
    console.log("Render Method!");

    return (
      <>
        <div className='App'>
          <h2>Hello - Component Did Update Demo</h2>
          <h3>Counter : {this.state.count}</h3>
          <button onClick={()=>this.setState({count: this.state.count+1})}>Update Counter</button>
        </div>
      </>
    )

  }

}

export default App;
