import React from 'react';

function User(props){
    return (
        <>
            <h3>User Component</h3>
            <button onClick={()=>props.data('Harsh')}>Click ME</button>
        </>
    )
}

export default User;