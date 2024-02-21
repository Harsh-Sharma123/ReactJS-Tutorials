import React from 'react';

export default class Student extends React.Component{
    render(){
        console.log(this.props);
        return (
            <>
                <h1>Hello {this.props.name}!</h1>
            </>
        )
    }
}