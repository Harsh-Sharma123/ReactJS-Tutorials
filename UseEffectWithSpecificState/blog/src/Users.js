import React, { useEffect } from "react";

function User(props){
    
    useEffect(()=>{
        console.log("Count Props UseEffect!");
    }, [props.count])

    useEffect(()=>{
        console.log("Data Props UseEffect!");
    }, [props.data])

    return (
        <>
            <h4>User Component!</h4>
            <h5>Data Props : {props.data}</h5>
            <h5>Count Props : {props.count}</h5>
        </>
    )
}

export default User;