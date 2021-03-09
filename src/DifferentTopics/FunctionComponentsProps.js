import React, { useEffect } from 'react';

//function component,props
function FunctionComponentProps(props) {

    //calling life cycle hooks on every event
    useEffect(
        () => {
            // console.warn("Hello from life cycle hooks..")
            console.warn("checking props in Function component:", props.name)
        }, []
    )
    useEffect(
        () => {
            console.warn("checking props in Function component while updating:", props.name)
        }
    )

    return (
        <div>
            <h2> About Function Component</h2>
            <h2>{props.name}</h2>

        </div>)

}

export default FunctionComponentProps