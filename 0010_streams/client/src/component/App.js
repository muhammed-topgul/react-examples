import React from 'react';

// REACT ROUTER DOM SETTINGS
import {BrowserRouter, Route, Link} from "react-router-dom";

// STREAM COMPONENTS
import StreamList from "./stream/StreamList";
import StreamCreate from "./stream/StreamCreate";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";
import StreamShow from "./stream/StreamShow";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path={'/'} exact component={StreamList}/>
                <Route path={'/streams/new'} exact component={StreamCreate}/>
                <Route path={'/streams/edit'} exact component={StreamEdit}/>
                <Route path={'/streams/delete'} exact component={StreamDelete}/>
                <Route path={'/streams/show'} exact component={StreamShow}/>
            </BrowserRouter>
        </div>
    );
};

export default App;