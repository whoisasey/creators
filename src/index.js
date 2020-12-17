import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './components/reducers/rootReducer';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

import './index.css';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer,
compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reactReduxFirebase(fbConfig),
  reduxFirestore(fbConfig)
  )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
