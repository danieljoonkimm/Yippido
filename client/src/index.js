import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from '../src/Reducers/index.jsx';
import thunk from "redux-thunk";
const middleware = [thunk];

const store = createStore(allReducers, applyMiddleware(...middleware));

render(<Provider store={store}><BrowserRouter>
<App />
</BrowserRouter></Provider>, document.getElementById('app'));