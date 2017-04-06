import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// delte app
// import App from './components/app';
import reducers from './reducers';

// add new components
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App />*/}
  </Provider>
  , document.querySelector('.container'));
