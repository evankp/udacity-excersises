import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from "./components/add-form";
import ShoppingList from "./components/shopping-list";

class App extends React.Component {
    state = {
        items: []
    };

    addItem = (event, value) => {
        event.preventDefault();
        this.setState(oldState => ({
            items: [...oldState.items, value],
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({items: this.state.items.slice(0, -1)}));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <h2>Shopping List</h2>
                <AddForm deleteLastItem={this.deleteLastItem} addItem={this.addItem} items={this.state.items} />
                <ShoppingList items={this.state.items}/>
            </div>
        );
    }
}

export default App;
