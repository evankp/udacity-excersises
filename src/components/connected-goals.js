import React from 'react';
import {ListContext} from "../context";
import Section from "./section";

export default class ConnectedGoals extends React.Component {
    render() {
        return (
            <ListContext.Consumer>
                {store => <Section type="goal" dispatch={store.dispatch} items={store.getState()['goal']}/>}
            </ListContext.Consumer>
        )
    }
}