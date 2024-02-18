import { useState } from 'react';

function Users(){

    const [user, setUser] = useState('Harsh');

    const handleClick = ()=>{
        setUser('Harsh Sharma');
    }

    return (
        <>
            <h2>Hello {user} !</h2>
            <button onClick={handleClick}>Click Me</button>
        </>
    )

}

export default Users;