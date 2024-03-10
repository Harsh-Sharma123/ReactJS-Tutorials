import React from 'react';

class Student extends React.Component{
    constructor(){
        super();
    }
    componentWillUnmount(){
        alert("Component Will Unmount Called!");
    }
    render(){
        return(
            <>
                <h2>Student Component !</h2>
            </>
        )
    }
}

export default Student;