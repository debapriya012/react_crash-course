import React from 'react';
//class component,props
class ClassComponentProps extends React.Component {
    constructor() {
        super();
        console.warn("props:", this.props);
    }
    componentDidMount() {
        // console.log('ComponentDidMount Calling...');
        console.warn("props:", this.props.name);
    }
    componentDidUpdate() {
        // console.warn('componentDidUpdate calling.........');
        // alert("name is updated");
        console.warn("props while update:", this.props.name);
    }
    render() {
        return (<div>
            <h2>About Class Component</h2>
            <h2>transferring value through props:{this.props.name}</h2>
        </div >)
    }
}
export default ClassComponentProps;


//Life cycle Method applicable on Class function
// constructor(){ }
// componentDidMount(){ }

// componentDidUpdate(){}
// componentDidUnmount(){ }
