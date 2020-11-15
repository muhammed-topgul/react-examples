import React from 'react';
import SongList from "./SongList";

// REDUX SETTING
import {connect} from 'react-redux';

const App = () => {
    return <div><SongList/></div>;
}

export default connect()(App);