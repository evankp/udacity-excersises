import React from 'react';
import {Link} from "react-router-dom";
import ImageInput from "../utils/ImageInput";
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

export default class CreateContact extends React.Component {
    static propTypes = {
        onCreateContact: PropTypes.func.isRequired
    };

    handleSubmit = e => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});

        if (this.props.onCreateContact) {
            this.props.onCreateContact(values)
        }
    };

    render() {
        return (
            <div>
                <Link to="/" className="close-create-contact">
                    Close
                </Link>
                <form className="create-contact-form" onSubmit={this.handleSubmit}>
                    <ImageInput className="create-contact-avatar-input" name="avatarURL" maxHeight={64}/>
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="handle" placeholder="Handle"/>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}