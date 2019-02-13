import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default class ListContacts extends React.Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        deleteContact: PropTypes.func.isRequired
    };

    state = {
        query: ""
    };

    updateQuery = query => {
        this.setState({
            query: query.trim()
        })
    };

    clearQuery = () => {
        this.updateQuery("")
    };

    render() {
        const { contacts, deleteContact } = this.props,
            { query } = this.state,
            // Filtering Contacts
            showingContacts = query === ''
                ? contacts
                :contacts.filter(contact => (
                   contact.name.toLowerCase().includes(query.toLowerCase())
                ));

        return (
            <div className="list-contacts">

                <div className="list-contacts-top">
                    <input type="text" className="search-contacts" placeholder="Search Contacts"
                           value={query}
                           onChange={event => this.updateQuery(event.target.value)}/>

                    <Link to="/create" className="add-contact">Add Contact</Link>
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}
                <ol className="contact-list">
                    {showingContacts.map(contact => (
                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}/>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button onClick={() => deleteContact(contact)} className="contact-remove">Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}