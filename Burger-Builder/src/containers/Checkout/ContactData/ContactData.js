import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="email" name="email" placeholder="Your Mail"/>
                    <input type="text" name="street" placeholder="Street"/>
                    <input type="text" name="postalcode" placeholder="Postal Code"/>
                    <Button buttonType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;