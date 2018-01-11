import React from 'react';
import RegistarationForm from './RegistrationForm';
import UserForm from './UserForm';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const username = this.props.name
        let formTemplate = (username === 'Anonymous') ? <RegistarationForm/>:<UserForm name={username}/>
        //TODO toggle user/login
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {this.props.items.map((item, index) =>
                                (
                                    <NavItem key={index}>
                                        <NavLink href={item.link}>{item.label}</NavLink>
                                    </NavItem>
                                )
                            )}
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            {formTemplate}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}