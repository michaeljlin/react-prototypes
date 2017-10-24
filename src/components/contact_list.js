import React, { Component } from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';

class ContactList extends Component{

    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        };
    }

    render(){
        console.log(this.state.contacts);

        const list = this.state.contacts.map(function(item, index){
            console.log(item);

            return(<ContactCard key={index} firstName={item.firstName} lastName={item.lastName} />)
        });

        return <div>{list}</div>
    }
}

export default ContactList;