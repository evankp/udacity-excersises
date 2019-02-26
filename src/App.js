import React, {Component} from 'react';
import './App.css';
import {getInitalValues} from "./redux-files/action-creators";
import connect from './components/connect-component'
import Section from "./components/section";


const ConnectedTodo = connect((store) => ({
    type: 'todo',
    items: store.todo
}))(Section);

const ConnectedGoals = connect((store) => ({
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
