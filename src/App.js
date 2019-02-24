import React, {Component} from 'react';
import './App.css';
import Section from "./components/section";
import {getInitalValues} from "./redux-files/action-creators";

export default class App extends Component {
    componentDidMount() {
        let {store} = this.props;

        store.subscribe(() => this.forceUpdate());

        store.dispatch(getInitalValues())
    }

    render() {
        const {loading} = this.props.store.getState();

        if (loading) {
            return <h3 className="list-sections">Loading...</h3>
        }

        return (
            <div className="App">
                <Section type="todo" store={this.props.store}/>
                <Section type="goal" store={this.props.store}/>
            </div>
        );
    }
}
