import React, { Component } from 'react';
import './App.css';
import RepositoryList from './components/RepositoryList';
import RepositoryInfo from './components/RepositoryInfo';

class App extends Component {
    constructor() {
        super();

        this.state = {
            repositoryList: [],
            currentRepository: {owner:{}},
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
        return (
         <div className="container">
             <RepositoryList repositoryList={this.state.repositoryList} selected={this.state.currentRepository} onClick={this.onClick} />
             <RepositoryInfo repository={this.state.currentRepository} />
         </div>
        );
    }
}

export default App;
