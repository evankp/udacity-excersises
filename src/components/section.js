import React from 'react'
import Proptypes from 'prop-types';
import * as actionCreators from '../redux-files/action-creators';

function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

export default class Section extends React.Component {
    static propTypes = {
        type: Proptypes.string.isRequired,
    };

    handleSubmit = e => {
        const {store, type} = this.props;
        e.preventDefault();

        if (type === 'todo') {
            store.dispatch(actionCreators.addTodo({name: this.input.value, id: generateId(), complete: false}));
        } else {
            store.dispatch(actionCreators.addGoal({name: this.input.value, id: generateId(), complete: false}));
        }

        this.input.value = ''
    };

    handleToggle = id => {
        if (this.props.type === 'todo') {
            this.props.store.dispatch(actionCreators.toggleTodo(id))
        }
    };

    handleDelete = id => {
        if (this.props.type === 'todo') {
            this.props.store.dispatch(actionCreators.removeTodo(id))
        } else {
            this.props.store.dispatch(actionCreators.removeGoal(id))
        }
    };

    render() {
        const {type, store} = this.props;
        return (
            <div className="list-sections">
                <h1>{type.substr(0, 1).toUpperCase() + type.substr(1)}s</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id={type} placeholder={`Add ${type}`} ref={input => this.input = input}/>
                    <button>Add</button>
                </form>
                <ul>
                    {store.getState()[type].map(item => (
                        <li key={item.id}>
                            <span onClick={() => this.handleToggle(item.id)}
                                  style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                                {item.name}
                            </span>
                            <button onClick={() => this.handleDelete(item.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}