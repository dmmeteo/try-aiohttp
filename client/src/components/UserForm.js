import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const username = this.props.name;
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="primary">
          Account
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{username}</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}