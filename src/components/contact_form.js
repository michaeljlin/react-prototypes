import React, { Component } from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            form:{
                firstName: '',
                lastName: ''
            }
        };
    }

    handleInputChange(event){
        const {value, name} = event.target;
        const {form} = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });

        // console.log(event.target.value);
        // console.log(event.target.name);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.form);
    }

    render(){
        const {firstName, lastName} = this.state.form;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.handleInputChange} name="firstName" type="text" className="form-control" value={firstName} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={this.handleInputChange} name="lastName" type="text" className="form-control" value={lastName}/>
                </div>
                <button>
                    Add Contact
                </button>
            </form>
        )
    }
}

export default ContactForm;