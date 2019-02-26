import React, {Component} from 'react';
import * as ReactRedux from 'react-redux';
import './App.css';
import {getInitalValues} from "./redux-files/action-creators";
import Section from "./components/section";


const ConnectedTodo = ReactRedux.connect((store) => ({
    type: 'todo',
    items: store.todo
}))(Section);

const ConnectedGoals = ReactRedux.connect((store) => ({
    type: 'goal',
    items: store.goal
}))(Section);

export default class App extends Component {
    componentDidMount() {
        this.props.dispatch(getInitalValues())
    }

    render() {
        if (this.props.loading) {
            return <h3 className="list-sections">Loading...</h3>
        }

        return (
            <div className="App">
                <ConnectedTodo/>
                <ConnectedGoals/>
            </div>
        );
    }
}
