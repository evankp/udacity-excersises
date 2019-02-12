import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from "./Components/add-form";
import UserListItem from "./Components/user-list-item";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

export default class App extends Component {
    state = {
        users: [],
        warning: '',
        showGames: true
    };

    checkExisting = user => {
        for (let currUser of this.state.users) {
            if (currUser.username === user.username) {
                return true
            }
        }

        return false
    };

    updateUsers = (event, user) => {
        event.preventDefault();
        this.setState({
            warning: ''
        });

        if (!this.checkExisting(user)) {
            this.setState(currState => ({
                users: [...currState.users, user]
            }))
        } else {
            this.setState({
                warning: 'User already exists!'
            });
        }
    };

    showGamesPlayed = event => {
        event.preventDefault();
        this.setState(currState => ({
            showGames: !currState.showGames
        }))
    };

    render() {
        let users = this.state.users;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - User display list</h1>
                </header>
                <h2>Add user</h2>
                <p className="text-danger">{this.state.warning}</p>
                <AddForm updateUsers={this.updateUsers} users={users}/>
                <a onClick={this.showGamesPlayed} className="games-toggle">{this.state.showGames ? 'Hide' : 'Show'} Games Played</a>
                <ol>
                    {users.map(user => (
                        <UserListItem key={user.username} user={user} showGames={this.state.showGames}/>
                    ))}
                </ol>
            </div>
        );
    }
}
