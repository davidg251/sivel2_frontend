import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App.js"
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware} from "redux"
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import {initializeCases} from './actions'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

store.dispatch(initializeCases())

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
