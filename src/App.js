import React, { useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import ClassComponent from "./ClassComponent";
// import FunctionComponent from './FunctionComponent';
// import ClassComponentProps from './ClassComponentProps';
// import FunctionComponentProps from './FunctionComponentsProps';
// import EventFunctionComponent from './EventFunctionComponent';
// import ListingConditions from './ListingConditions';
// import BootstrapUses from './BootstrapUses';
// import FormsCreateUser from './FormsCreateUser';
import ReactRoutingUse from './ReactRoutingUse';



function App() {
  // const [name, setName] = useState("Priya");
  return (
    <div className="App">

      {/* <h1>Hello from React.....</h1> */}
      {/* <ClassComponent  /> */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponentProps name={name} /> */}
      {/* <FunctionComponentProps name={name} /> */}
      {/* <button onClick={() => setName("Syed Priya")}>Update Name using props</button> */}
      {/* <EventFunctionComponent /> */}
      {/* <ListingConditions /> */}
      {/* <BootstrapUses />
      <FormsCreateUser /> */}
      <ReactRoutingUse />

    </div>
  );
}

export default App;
