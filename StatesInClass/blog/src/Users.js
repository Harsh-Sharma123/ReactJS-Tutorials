import React from 'react';

class Users extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'Harsh'
        }
    }

    render(){
        return (
            <>
                <h1>Hello {this.state.name} !</h1>
                <button onClick={()=>this.setState({name: 'Harsh Sharma'})}>Click Me</button>
            </>
        )
    }
}

export default Users;