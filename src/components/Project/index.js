import React from 'react';

function Project({project}) {
    const {
        name,
        deployed,
        github,
        image
    } = project;

    return (
        <div class="content center">
            <h1>{name}</h1>
            <h2><a href={deployed} rel="noreferrer" target="_blank"> Deployed Application </a></h2>
            <h2><a href={github} rel="noreferrer" target="_blank"> GitHub </a></h2>
            <img src={image} class="image" alt={name} />
        </div>
    )
}

export default Project;