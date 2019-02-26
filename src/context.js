import React from 'react'

export const ListContext = React.createContext();

export default class Provider extends React.Component {
    render() {
        return (
            <ListContext.Provider value={this.props.store}>
                {this.props.children}
            </ListContext.Provider>
        )
    }
}