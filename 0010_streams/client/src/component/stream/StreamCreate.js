import React, {Component} from 'react';

// REDUX SETTING
import {connect} from 'react-redux';
import {createStream} from "../../action";
import StreamForm from "./form/StreamForm";

class StreamCreate extends Component {

    onFormSubmit = (formValues) => {
        console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onFormSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

export default connect(null, {createStream})(StreamCreate);
