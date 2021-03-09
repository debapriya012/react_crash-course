import React, { useState } from 'react'

function FormsCreateUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function addUser() {
        let data = { name, age, address };
        console.warn("called", data);
    }

    return (<div>
        <h1>Add a new User</h1>
        <input type='text' onChange={(e) => { setName(e.target.value) }} name='userName' value={name} /><br />
        <input type='text' onChange={(e) => { setAge(e.target.value) }} name='userAge' value={age} /><br />
        <input type='text' onChange={(e) => { setAddress(e.target.value) }} name='userAddress' value={address} /><br />
        <button onClick={addUser}>
            Create User
        </button>
    </div>)
}
export default FormsCreateUser;