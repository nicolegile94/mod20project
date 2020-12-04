import React, { useEffect } from 'react';


function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <div>
            <nav>
                <ul className="topnav">
                    {categories.map((Category) => (
                        <li key={Category.name} class="navlink">
                            <span
                                onClick={() => setCurrentCategory(Category)}
                            >
                                {Category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
)};

export default Nav;