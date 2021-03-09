import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import DummyUsers from "./DummyUsers";
import FormsCreateUser from "./FormsCreateUser";
import BootstrapUses from "./BootstrapUses";
import UserWithApi from './UserWithApi';
function ReactRoutingUse() {
    return (<div>
        <Router>
            {/* <h1>React Routing Example</h1> */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link ><Link to='/ClassComponent'>Class Component</Link></Nav.Link>
                    <Nav.Link ><Link to='/FunctionComponent'>Function Component</Link></Nav.Link>
                    <Nav.Link ><Link to='/bootstrap'>Bootstrap Buttons</Link></Nav.Link>
                    <Nav.Link ><Link to='/list'>User list</Link></Nav.Link>

                    <Nav.Link ><Link to='/Createuser'>Create User</Link></Nav.Link>
                    <Nav.Link ><Link to='/employeeList'>Employees</Link></Nav.Link>



                </Nav>

            </Navbar>
            <Switch>
                <Route path="/ClassComponent">
                    <ClassComponent />
                </Route>
                <Route path="/FunctionComponent">
                    <FunctionComponent />
                </Route>
                <Route path="/bootstrap">
                    <BootstrapUses />
                </Route>
                <Route path="/list">
                    <DummyUsers />
                </Route>

                <Route path="/Createuser">
                    <FormsCreateUser />
                </Route>
                <Route path="/employeeList">
                    <UserWithApi />
                </Route>

            </Switch>
        </Router>
    </div>)
}
export default ReactRoutingUse;