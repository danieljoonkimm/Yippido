import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from '../src/Reducers/index.jsx';
import initialState from "./components/ShoppingCart/CartLogic/dummyCartData.jsx";

const store = createStore(allReducers, initialState);

render(<Provider store={store}><BrowserRouter>
<App />
</BrowserRouter></Provider>, document.getElementById('app'));