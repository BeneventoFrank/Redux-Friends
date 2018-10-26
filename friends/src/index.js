import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore,applyMiddleware} from 'redux';
import rootReducer from './Reducers'


const store = createStore(rootReducer,applyMiddleware(thunk, logger))

ReactDOM.render(
                <Provider store={store}>
                <BrowserRouter>
                <App />
                </BrowserRouter>
                </Provider>
                , document.getElementById('root'));

