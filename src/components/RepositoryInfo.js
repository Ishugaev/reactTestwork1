import React from 'react';

const RepositoryInfo = (prop) => {
    return prop.repository.owner
        ?
        <div className="col">
            <div className="label">
                <div>Owner avatar: </div>
                <div><img src={prop.repository.owner.avatar_url}/></div>
            </div>
            <div className="label">
                <span>Owner login: </span>
                <span>{prop.repository.owner.login}</span>
            </div>
            <div className="label">
                <span>Full Name: </span>
                <span>{prop.repository.full_name}</span>
            </div>
            <div className="label">
                <span>Description: </span>
                <span>{prop.repository.description}</span>
            </div>
            <div className="label">
                <span>Language: </span>
                <span>{prop.repository.language}</span>
            </div>
            <div className="label">
                <span>Html url: </span>
                <span>{prop.repository.html_url}</span>
            </div>
        </div>
        :
        <span>Loading...</span>;
}

export default RepositoryInfo