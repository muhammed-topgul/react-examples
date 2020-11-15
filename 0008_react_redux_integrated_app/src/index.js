import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";

// REDUX SETTING
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';


ReactDOM.render(<Provider store={createStore(reducers)}><App/></Provider>, document.querySelector('#root'));