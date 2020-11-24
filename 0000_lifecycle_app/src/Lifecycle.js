import React, {Component} from 'react';

class Lifecycle extends Component {

    // componentWillMount -> immediately before initial rendering
    // componentDidMount -> immediately after initial rendering
    // componentWillReceiveProps -> when component receives new props
    // shouldComponentUpdate -> before rendering, after receiving new props or state
    // componentWillUpdate -> before rendering, after receiving new props or state
    // componentWillUnmount -> immediately before removing component from DOM

    state = {
        random: 12345
    }

    constructor(props) {
        super();
        alert('Constructor');
        console.log('>>> Constructor');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    componentWillMount() {
        alert('componentWillMount -> immediately before initial rendering');
        console.log('>>> Component Will Mount');
        console.log('>>> componentWillMount -> immediately before initial rendering');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    componentDidMount() {
        alert('Component Did Mount');
        console.log('>>> Component Did Mount');
        console.log('componentDidMount -> immediately after initial rendering');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        alert('Component Will Receive Props');
        console.log('>>> Component Will Receive Props', nextProps);
        console.log('componentWillReceiveProps -> when component receives new props');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        alert('Should Component Update');
        console.log('>>> Should Component Update', nextProps, nextState);
        console.log('shouldComponentUpdate -> before rendering, after receiving new props or state');
        console.log('>>>>>>>>>> <<<<<<<<<<')
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        alert('Component Will Update');
        console.log('>>> Component Will Update', nextProps, nextState);
        console.log('componentWillUpdate -> before rendering, after receiving new props or state');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert('Component Did Update');
        console.log('>>> Component Did Update', prevProps, prevState);
        console.log('');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    componentWillUnmount() {
        alert('componentWillUnmount -> immediately before removing component from DOM');
        console.log('Component Will Unmount');
        console.log('componentWillUnmount -> immediately before removing component from DOM');
        console.log('>>>>>>>>>> <<<<<<<<<<')
    }

    render() {
        return (
            <div>
                Lifecycle app
            </div>
        );
    }
}

export default Lifecycle;
