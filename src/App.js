import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    state = {
        mirrorText: ""
    };

    handleChange = (e) => {
        this.setState({
            mirrorText: e.target.value
        })
    };

    render() {
        let {mirrorText} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <input type="text" value={mirrorText} onChange={this.handleChange} placeholder="Say Something"/>
                    <p className="echo">Echo:</p>
                    <p>{mirrorText === "" ? null : mirrorText}</p>
                </div>
            </div>
        );
    }
}
