import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux';
import ReduxThunk from 'redux-thunk';
import {todo, goal, loading} from './redux-files/reducers';

const logger = store => next => action => {
    console.group(action.type);
        console.log('Action: ', action);
        let result = next(action);
        console.log('New state: ', store.getState());
    console.groupEnd();

    return result
};

const store = Redux.createStore(Redux.combineReducers({todo, goal, loading}), Redux.applyMiddleware(ReduxThunk, logger));

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
