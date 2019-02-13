import React from 'react'

export default class ChatWindow extends React.Component {
    state = {
        message: {
            username: this.props.user.username,
            text: ""
        }
    };

    isDisabled = () => {
        // do not allow submission if no message
        return this.state.message.text === "";
    };

    handleMessageInput = event => {
        event.preventDefault();
        let eventValue = event.target.value;

        this.setState(currState => ({
            ...currState,
            message: {
                ...currState.message,
                text: eventValue
            }
        }));
    };

    handleSubmit = event => {
        if (this.props.handleSendMessage(event, this.state.message).success === true) {
            this.setState(currState => ({
                ...currState,
                message: {
                    ...currState.message,
                    text: ""
                }
            }));
        }
    };

    render() {
        let {messages, user} = this.props;
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>

                <ul className="message-list">
                    {messages.length === 0 && (
                        <li>There are currently no messages</li>
                    )}

                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={
                                message.username === user.username ? 'message sender' : 'message recipient'
                            }
                        >
                            <p>{`${message.username === user.username ? 'You' : message.username}: ${message.text}`}</p>
                        </li>
                    ))}
                </ul>

                <div>
                    <form className="input-group" onSubmit={event => this.handleSubmit(event)}>
                        <input type="text" className="form-control" value={this.state.message.text}
                               placeholder="Enter your message..." onChange={this.handleMessageInput}/>
                        <div className="input-group-append">
                            <button className="btn submit-button" disabled={this.isDisabled()}>
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}