import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";

// REDUX SETTINGS
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import reducer from './reducer';

// redux dev tools ayarlari
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
