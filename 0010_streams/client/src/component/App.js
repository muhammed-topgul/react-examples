import React from 'react';

// REACT ROUTER DOM SETTINGS
import {Router, Route} from "react-router-dom";
import history from "../common/history";

// STREAM COMPONENTS
import StreamList from "./stream/StreamList";
import StreamCreate from "./stream/StreamCreate";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";
import StreamShow from "./stream/StreamShow";
import Header from "./Header";

const App = () => {
    return (
        <div className={'ui container'}>
            <Router history={history}>
                <Header/>
                <Route path={'/'} exact component={StreamList}/>
                <Route path={'/streams/new'} exact component={StreamCreate}/>
                <Route path={'/streams/edit'} exact component={StreamEdit}/>
                <Route path={'/streams/delete'} exact component={StreamDelete}/>
                <Route path={'/streams/show'} exact component={StreamShow}/>
            </Router>
        </div>
    );
};

export default App;
