import React, { useEffect, useState } from 'react';

//function component,state,life cycle hooks
function FunctionComponent() {
    const [name, setName] = useState("Priya");
    const [age, setAge] = useState(25);
    //calling life cycle hooks on every event
    useEffect(
        () => {
            console.warn("Hello from life cycle hooks..")
        }
    )
    //not caling the life cycle hooks on updates or on click event
    // useEffect(
    //     () => {
    //         console.warn("Hello from life cycle hooks..")
    //     }, []
    // )
    //only calling life cycle hooks on age state change
    // useEffect(
    //     () => {
    //         console.warn("Hello from life cycle hooks..")
    //     }, [age]
    // )
    let data = 'About Function Component using JSX';
    return (
        <div>
            <h2> About Function Component</h2>
            <h2>{data}</h2>
            <h2>{name},{age}</h2> <button onClick={() => setAge(30)}>Update Age</button>
            <button onClick={() => setName("Syed Priya")}>Update Name</button>
        </div>)

}

export default FunctionComponent