import React,    { PureComponent } from 'react';
import Repository from './Repository';

class RepositoryList extends PureComponent {
    render() {
        return (
            <nav className="col">
                {
                    this.props.repositoryList.map(repository => (
                        <div className="repository">
                            <span>{repository === this.props.selected  ? '>' : ''}</span>
                            <Repository key={repository.name} repository={repository} onClick={this.props.onClick} />
                        </div>
                    ))
                }
            </nav>
        );
    }
}

export default RepositoryList;