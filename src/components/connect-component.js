import React from 'react';
import {ListContext} from "../context";

const connect = mapStateToProps => Component => {
    class Receiver extends React.Component {
        componentDidMount() {
            const {subscribe} = this.props.store;

            this.unsubscribe = subscribe(() => this.forceUpdate())
        }

        componentWillUnmount() {
            this.unsubscribe()
        }

        render() {
            const {dispatch, getState} = this.props.store,
                state = getState(),
                stateNeeded = mapStateToProps(state);

            return (
                <Component {...stateNeeded} dispatch={dispatch}/>
            )
        }
    }

     return class ConnectedComponent extends React.Component {
        render() {
            return (
                <ListContext.Consumer>
                    {store => <Receiver store={store}/>}
                </ListContext.Consumer>
            )
        }
    }
};

export default connect