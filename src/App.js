import React, { useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import ClassComponent from "./DifferentTopics/ClassComponent";
// import FunctionComponent from './DifferentTopics/FunctionComponent';
// import ClassComponentProps from './DifferentTopics/ClassComponentProps';
// import FunctionComponentProps from './DifferentTopics/FunctionComponentsProps';
// import EventFunctionComponent from './DifferentTopics/EventFunctionComponent';
// import ListingConditions from './DifferentTopics/ListingConditions';
// import BootstrapUses from './DifferentTopics/BootstrapUses';
// import FormsCreateUser from './DifferentTopics/FormsCreateUser';
import ReactRoutingUse from './DifferentTopics/ReactRoutingUse';



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
