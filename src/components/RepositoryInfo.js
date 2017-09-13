//full_name, html_url, description, language, owner.login, owner.avatar_url
import React, { Component } from 'react';

class RepositoryInfo extends Component {
    render() {
        return (
            <div className="col">
                <div className="label">
                    <div>Owner avatar: </div>
                    <div><img src={this.props.repository.owner.avatar_url}/></div>
                </div>
                <div className="label">
                    <span>Owner login: </span>
                    <span>{this.props.repository.owner.login}</span>
                </div>
                <div className="label">
                    <span>Full Name: </span>
                    <span>{this.props.repository.full_name}</span>
                </div>
                <div className="label">
                    <span>Description: </span>
                    <span>{this.props.repository.description}</span>
                </div>
                <div className="label">
                    <span>Language: </span>
                    <span>{this.props.repository.language}</span>
                </div>
                <div className="label">
                    <span>Html url: </span>
                    <span>{this.props.repository.html_url}</span>
                </div>
            </div>
        );
    }
}

export default RepositoryInfo