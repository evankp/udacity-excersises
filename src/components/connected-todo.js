import React from 'react';
import {ListContext} from "../context";
import Section from "./section";

export default class ConnectedTodo extends React.Component {
    render() {
        return (
            <ListContext.Consumer>
                {store => <Section type="todo" dispatch={store.dispatch} items={store.getState()['todo']}/>}
            </ListContext.Consumer>
        )
    }
}