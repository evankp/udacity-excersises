import React, {Component} from 'react';
import ListContacts from "./Components/list-contacts";
import * as localAPI from "./utils/ContactsAPI";
import {Route} from "react-router-dom";
import CreateContact from "./Components/create-contact";

class App extends Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        localAPI.getAll()
            .then(contacts => {
                this.setState({
                    contacts: contacts
                })
            })
    }

    removeContact = contact => {
        this.setState(currentState => ({
            contacts: currentState.contacts.filter(c => {
                return c.id !== contact.id
            })
        }));

        localAPI.remove(contact)
    };

    onCreateContact = contact => {
        localAPI.create(contact)
            .then(res => {
                this.setState(currentState => ({
                    contacts: currentState.contacts.concat([contact])
                }))
            })
    };

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <ListContacts contacts={this.state.contacts} deleteContact={this.removeContact}/>
                )}/>

                <Route path="/create" render={({history}) => (
                    <CreateContact onCreateContact={contact => {
                        this.onCreateContact(contact);
                        history.push('/')
                    }}/>
                )}/>
            </div>
        );
    }
}

export default App;
