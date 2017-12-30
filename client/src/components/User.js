import React from 'react';

export default class User extends React.Component {
    render(){
        const {name} = this.props;
        return <div>Hello, {name}!</div>
    }
}