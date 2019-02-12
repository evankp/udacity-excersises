import React from 'react'

export default class AddForm extends React.Component {
    state = {
        user: {
            firstName: "",
            lastName: "",
            username: "",
            gamesPlayed: 0
        },
    };

    onChange = event => {
        let {id, value} = event.target;
        this.setState(currState => ({
            ...currState,
            user: {
                ...currState.user,
                [id]: value
            }
        }))
    };

    isDisabled = () => {
        return this.state.user.firstName === "" || this.state.user.lastName === "" || this.state.user.username === "";
    };

    render() {
        let {firstName, lastName, username} = this.state.user;
        return (
            <form onSubmit={event => this.props.updateUsers(event, this.state.user)}>
                <input id="firstName" type="text" placeholder="First Name" value={firstName} onChange={this.onChange} />
                <input id="lastName" type="text" placeholder="Last Name" value={lastName} onChange={this.onChange} />
                <input id="username" type="text" placeholder="Username" value={username} onChange={this.onChange} />
                <button disabled={this.isDisabled()}>Add</button>
            </form>
        )
    }
}