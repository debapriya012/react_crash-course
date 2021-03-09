import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function UserWithApi() {
    const [users, updateUsers] = useState([]);
    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
            data.json().then(result => {
                console.warn("result", result)
                updateUsers(result.data)
            })
        })
    }, [])
    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) =>

                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    )
}
export default UserWithApi;