import React from 'react';

// REDUX SETTING
import {connect} from 'react-redux';
import {fetchStreams} from "../../action";
import {Link} from "react-router-dom";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to={'/streams/new'} className={'ui button primary'}>
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    renderIsAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className={'right floated content'}>
                    <Link to={`/streams/edit/${stream.id}`} className={'ui button primary'}>Edit</Link>
                    <button className={'ui button negative'}>Delete</button>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className={'item'} key={stream.id}>
                    {this.renderIsAdmin(stream)}
                    <i className={'large middle aligned icon camera'}/>
                    <div className={'content'}>
                        {stream.title}
                        <div className={'description'}>{stream.description}</div>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className={'ui celled list'}>{this.renderList()}</div>
                {this.renderCreateButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // Object.values obje alir array verir
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, {fetchStreams})(StreamList);
