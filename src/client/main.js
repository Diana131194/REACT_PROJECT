import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';
//import theme - change nova-light to other theme as needed
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Router, hashHistory as history } from 'react-router';
import Login from './components/Login/index'
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import "primeflex/primeflex.css"
//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store, add reducers, attach saga
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

//run saga(s)
sagaMiddleware.run(Sagas);
let History = createBrowserHistory();

// Render the main component into the dom

ReactDOM.render(
  <Router history={History}>
    <Provider store={store}>
        <App />
    </Provider>,
   </Router>,
  document.getElementById('app'));


