import React from 'react';
//class component,state,life cycle methods
class ClassComponent extends React.Component {
    constructor() {
        super();
        // console.warn('constructor calling....')
        this.state = {
            name: 'Priya',
            age: 24
        }
    }
    componentDidMount() {
        console.log('ComponentDidMount Calling...');
    }
    componentDidUpdate() {
        // console.warn('componentDidUpdate calling.........');
        alert("name is updated");
    }
    render() {
        return (<div>
            <h2>About Class Component</h2>
            <h3>{this.state.name},{this.state.age}</h3>
            <button onClick={() => { this.setState({ name: 'Syed Priya' }) }}>Update state</button>
        </div >)
    }
}
export default ClassComponent;


//Life cycle Method applicable on Class function
// constructor(){ }
// componentDidMount(){ }

// componentDidUpdate(){}
// componentDidUnmount(){ }
