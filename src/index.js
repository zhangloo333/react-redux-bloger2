import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// delte app
// import App from './components/app';
import reducers from './reducers';

// add new components
import routes from './routes';
import {Router, browserHistory} from 'react-router';
// add in 73



const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     {/* 被删掉 <App />
//     */}
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
//   , document.querySelector('.container'));
