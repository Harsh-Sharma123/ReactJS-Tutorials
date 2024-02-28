import React, { useState } from 'react';

function Login(){

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function handleForm(e){
        e.preventDefault();
        console.log(user, pass)
        if(user.length < 4 || pass.length < 4) alert("Incorrect Values!!");
        else alert ("All Good!!")
    }

    function handleUser(e){
        let username = e.target.value;
        if(username.length < 4){
            setUserErr(true);
        }else{
            setUserErr(false);
        }
        setUser(e.target.value);
    }

    function handlePass(e){
        let password = e.target.value;
        if(password.length < 4){
            setPassErr(true);
        }else{
            setPassErr(false);
        }
        setPass(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input type="text" placeholder='Enter User ID' onChange={handleUser} /> {userErr ? <span style={{color: 'red'}}>Invalid Username</span> : <></> }<br /><br />
                <input type="text" placeholder='Enter Password' onChange={handlePass} /> {passErr ? <span style={{color: 'red'}}>Invalid Password</span> : <></>} <br /><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;