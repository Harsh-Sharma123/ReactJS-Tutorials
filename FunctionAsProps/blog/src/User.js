import React from 'react';

function User(props){
    return (
        <>
            <h2>User Component</h2>
            <button onClick = {props.data}>Call function from Parent Component</button>
        </>
    )
}

export default User;