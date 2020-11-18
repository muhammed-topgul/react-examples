import React from 'react';

// REACT ROUTER DOM SETTINGS
import {BrowserRouter, Route} from "react-router-dom";

const PageOne = () => {
    return <div>Page One</div>
}


const PageTwo = () => {
    return <div>Page Two</div>
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