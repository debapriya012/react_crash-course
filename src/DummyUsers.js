import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function DummyUsers() {
    const [users, updateUsers] = useState([
        { name: "anil", age: 25, address: 'Noida' },
        { name: "priya", age: 28, address: 'bangaluru' },
        { name: "antil", age: 27 },
        { name: "sohail", age: 24 },
        { name: "sam", age: 23 },
    ]);
    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) =>

                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    )
}
export default DummyUsers;