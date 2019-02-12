import React from 'react';

export default class AddForm extends React.Component {
    state = {
        value: ""
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    noItemsFound = () => {
        return this.props.items.length === 0;
    };

    render() {
        return (
            <div>
                <form onSubmit={event => this.props.addItem(event, this.state.value)}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>

                <button onClick={this.props.deleteLastItem} disabled={this.noItemsFound()}>
                    Delete Last Item
                </button>
            </div>
        )
    }
}