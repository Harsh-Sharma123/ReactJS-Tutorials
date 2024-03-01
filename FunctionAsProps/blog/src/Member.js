function Member(props){
    return (
        <>
            <h2>Member Function</h2>
            <button onClick={props.data}>Call Parent Component Function</button>
        </>
    )
}

export default Member;