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
            <a href={deployed}> Deployed Application </a>
            <a href={github}> GitHub </a>
        </div>
    )
}

export default Project;