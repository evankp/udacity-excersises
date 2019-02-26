import React from 'react'
import Proptypes from 'prop-types';
import * as actionCreators from '../redux-files/action-creators';

export default class Section extends React.Component {
    static propTypes = {
        type: Proptypes.string.isRequired,
    };

    handleSubmit = e => {
        const {dispatch, type} = this.props;
        e.preventDefault();

        dispatch(actionCreators.handleAddItem(this.input.value, type, () => this.input.value = ''))
    };

    handleToggle = id => {
        if (this.props.type === 'todo') {
            this.props.dispatch(actionCreators.toggleTodo(id))
        }
    };

    handleDelete = item => {
        this.props.dispatch(actionCreators.handleDeleteItem(item, this.props.type))
    };

    render() {
        const {type, items} = this.props;
        return (
            <div className="list-sections">
                <h1>{type.substr(0, 1).toUpperCase() + type.substr(1)}s</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id={type} placeholder={`Add ${type}`} ref={input => this.input = input}/>
                    <button>Add</button>
                </form>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <span onClick={() => this.handleToggle(item.id)}
                                  style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                                {item.name}
                            </span>
                            <button onClick={() => this.handleDelete(item)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}