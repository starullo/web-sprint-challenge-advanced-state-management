import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    <App />
</Provider>
</BrowserRouter>,
document.getElementById("root"));
