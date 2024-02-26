import React, {useState} from 'react';

function Profile(){
    const [flag, setflag] = useState(3);

    return (
        <>
            {flag == 1 ? <h2>Welcome User 1</h2> : flag == 2? <h2>Welcome User 2</h2> : <h2>Welcome User 3</h2> }
        </>
    )
}

export default Profile;