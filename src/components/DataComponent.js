import React, {Component} from 'react';
import RepositoryList from './RepositoryList';
import RepositoryInfo from './RepositoryInfo';

function DataComponent () {
    return class extends Component {
        constructor() {
            super();

            this.state = {
                repositoryList: [],
                currentRepository: {},
            };
        }

        onClick = (repositoryName) => {
            this.setState({
                currentRepository: this.state.repositoryList.find(({ name }) => name === repositoryName),
            });
        };

        componentDidMount() {
            fetch('//api.github.com/orgs/octokit/repos')
                .then(response => response.json())
                .then(repositoryList => this.setState({repositoryList, currentRepository: repositoryList[0]}));
        }

        render() {
            return this.state.repositoryList.length ? (
                <div className="container">
                    <RepositoryList repositoryList={this.state.repositoryList} selected={this.state.currentRepository} onClick={this.onClick} />
                    <RepositoryInfo repository={this.state.currentRepository} />
                </div>
            )
                : <span>Loading data...</span>;
        }
    };
}

export default DataComponent;
