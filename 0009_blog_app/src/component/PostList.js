import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../action";

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Post List Component
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
