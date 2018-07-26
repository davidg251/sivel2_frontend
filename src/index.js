import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App.js";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
