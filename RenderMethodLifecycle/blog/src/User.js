import React from 'react';

class User extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'Harsh'
        }
    }

    render(){

        console.log("Render Method Called!")

        return (
            <>
                <h2>User Component</h2>
                <h3>Name : {this.state.name}</h3>
                <h3>Counter : {this.props.count}</h3>
                <button onClick={()=>this.setState({name: 'Harsh Sharma'})}>Update Name</button><br /><br />
            </>
        )
    }
}

export default User;