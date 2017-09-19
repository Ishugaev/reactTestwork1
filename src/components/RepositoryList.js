import React from 'react';
import Repository from './Repository';

const RepositoryList = (prop) => {
    return (
        <nav className="col">
            {
                prop.repositoryList.map(repository => (
                    <div className="repository">
                        <span>{repository === prop.selected  ? '>' : ''}</span>
                        <Repository key={repository.name} repository={repository} onClick={prop.onClick} />
                    </div>
                ))
            }
            </nav>
    );
}

export default RepositoryList;