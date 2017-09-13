import React, { Component } from 'react';

class Repository extends Component {
    onClick = () => {
        this.props.onClick(this.props.repository.name);
    };

    render() {
        return (
            <a onClick={this.onClick}>{this.props.repository.name}</a>
        );
    }
}

export default Repository;