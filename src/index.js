import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux';
import ReduxThunk from 'redux-thunk';
import * as ReactRedux from 'react-redux';

import './index.css';
import {todo, goal, loading} from './redux-files/reducers';
import App from "./App";

const logger = store => next => action => {
    console.group(action.type);
    console.log('Action: ', action);
    let result = next(action);
    console.log('New state: ', store.getState());
    console.groupEnd();

    return result
};

export const store = Redux.createStore(Redux.combineReducers({
    todo,
    goal,
    loading
}), Redux.applyMiddleware(ReduxThunk, logger));

const ConnectedApp = ReactRedux.connect(store => ({
    loading: store.loading
}))(App);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ConnectedApp/>
    </ReactRedux.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
