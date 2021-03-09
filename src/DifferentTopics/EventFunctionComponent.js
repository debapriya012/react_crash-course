import React, { useState } from 'react';

function EventFunctionComponent() {
    const [val, setVal] = useState("Priya");
    function test() {
        console.warn('test function on click event');
    }
    function eventValue(e) {
        console.warn('get the event value', e.target.value);
        setVal(e.target.value);
    }
    return (
        <div>
            <h2> About Function Component</h2>
            <button onClick={() => console.warn("click event fired")}>Click event</button><br />
            <input type="text" value={val} onChange={eventValue} />
            {/* <button onClick={test}>Click event</button> */}
            <button onClick={() => alert(val)}>Click event</button>

        </div>)

}

export default EventFunctionComponent