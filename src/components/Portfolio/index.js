import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Project 1',
            deployed: 'www.google.com',
            github: 'www.github.com'
        },
        {
            name: 'Project 2',
            deployed: 'www.facebook.com',
            github: 'www.github.com'
        }
    ])
    
    return (
      <section class="content">
        <h1 id="portfolio">Portfolio</h1>
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      </section>
      );
    };

export default Portfolio;