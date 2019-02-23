import React, {Component} from 'react';
import './App.css';
import Section from "./components/section";

export default class App extends Component {
    componentDidMount() {
        this.props.store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <div className="App">
                <Section type="todo" store={this.props.store}/>
                <Section type="goal" store={this.props.store}/>
            </div>
        );
    }
}
