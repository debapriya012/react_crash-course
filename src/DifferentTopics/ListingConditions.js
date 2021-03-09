import React, { useState } from 'react';

function ListingConditions() {
    const [users, updateUsers] = useState([
        { name: "anil", age: 25 },
        { name: "priya", age: 28 },
        { name: "antil", age: 27 },
        { name: "sohail", age: 24 },
        { name: "sam", age: 23 },
    ]);
    return (<div>
        <h1>Learning listing here</h1>
        {
            users.map((item, i) =>
                <div key={i}>{item.name},{item.age}</div>)
        }
        <h1>Learning Conditions Here</h1>
        {
            users.length === 4 ? <div>Yes,This is right</div> : <div>no U are checking some wrong length array</div>
        }
    </div>)
}
export default ListingConditions;