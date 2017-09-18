import React, { PureComponent } from 'react';

class Repository extends PureComponent {
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