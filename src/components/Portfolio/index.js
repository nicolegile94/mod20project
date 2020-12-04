import React, { useState } from 'react';
import Project from '../Project';
import budgetImage from '../../assets/PortfolioImage/BudgetTracker.jpeg';
import socialImage from '../../assets/PortfolioImage/Social.jpeg';
import techImage from '../../assets/PortfolioImage/TechBlog.jpeg';
import ecommImage from '../../assets/PortfolioImage/Ecommerce.jpeg';
import noteImage from '../../assets/PortfolioImage/NoteTaker.jpeg';
import employeeImage from '../../assets/PortfolioImage/Employee.jpeg';


function Portfolio() {

    const [projects] = useState([
        {
            name: 'Budget Tracker',
            deployed: 'https://powerful-reaches-50549.herokuapp.com',
            github: 'https://github.com/nicolegile94/mod19project',
            image: budgetImage
        },
        {
            name: 'Social Network API',
            deployed: 'https://drive.google.com/file/d/1k3qORT4UEF5x-7dBD5Lcj8XKBtYPLRZc/view',
            github: 'https://github.com/nicolegile94/mod18project',
            image: socialImage
        },
        {
          name: 'Tech Blog',
          deployed: 'https://lit-hamlet-21480.herokuapp.com/',
          github: 'https://github.com/nicolegile94/mod14project',
          image: techImage
        },
        {
          name: 'Ecommerce BackEnd',
          deployed: 'https://drive.google.com/file/d/1Rw3iP-rQrbhxmVgNBkVrNI8DNUuqqoAW/view',
          github: 'https://github.com/nicolegile94/mod13project/tree/main',
          image: ecommImage
        },
        {
          name: 'Employee Tracker',
          deployed: 'https://drive.google.com/file/d/1aQHWIyjhym8JW7R6_T78VRWLlgrUDZVa/view',
          github: 'https://github.com/nicolegile94/mod12project',
          image: employeeImage
        },
        {
          name: 'Note Taker',
          deployed: 'https://still-ravine-55832.herokuapp.com/',
          github: 'https://github.com/nicolegile94/mod11project',
          image: noteImage
        }
    ])
    
    return (
      <section class="content">
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