import React from 'react';

function User(props){
    return (
        <>
            <h3>Hello {props.data.name} - {props.data.age} - {props.data.email}</h3>
        </>
    )
}

export default User;