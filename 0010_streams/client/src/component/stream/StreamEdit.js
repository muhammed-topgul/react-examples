import React from 'react';

// REDUX SETTING
import {connect} from 'react-redux';
import {fetchStream, editStream} from "../../action";
import StreamForm from "./form/StreamForm";

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onFormSubmit = (formValues) => {
        console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div> Loading... </div>
        }

        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm initialValues={this.props.stream} onFormSubmit={this.onFormSubmit}/>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
