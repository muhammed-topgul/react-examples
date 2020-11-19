import React from 'react';

// REACT ROUTER DOM SETTINGS
import {BrowserRouter, Route, Link} from "react-router-dom";

const PageOne = () => {
    return (
        <div>
            Page One
            <br/>
            <Link to={'/page-two'}>Navigate to Page Two</Link>
        </div>
    );
}


const PageTwo = () => {
    return (
        <div>
            Page Two
            <br/>
            <Link to={'/'}>Navigate to Page One</Link>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path={'/'} exact component={PageOne}/>
                <Route path={'/page-two'} component={PageTwo}/>
            </BrowserRouter>
        </div>
    );
};

export default App;