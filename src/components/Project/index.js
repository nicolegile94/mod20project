import React from 'react';

function Project({project}) {
    const {
        name,
        deployed,
        github
    } = project;

    return (
        <div>
            Name: {name}
            <a href={deployed} rel="noreferrer" target="_blank"> Deployed Application </a>
            <a href={github} rel="noreferrer" target="_blank"> GitHub </a>
        </div>
    )
}

export default Project;