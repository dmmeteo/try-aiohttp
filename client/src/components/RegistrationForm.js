import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('email:' + this.state.email);
        console.log('password:' + this.state.password);
    }

    handleOnChange(fieldName, e) {
        if (e.target.value.length > 0) {
            this.setState({['' + fieldName]: e.target.value})
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} inline>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange.bind(this, 'email')}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange.bind(this, 'password')}
                    />
                </FormGroup>
                {' '}
                <Button color="warning">Submit</Button>
            </Form>
        )
    }
}