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
            <nav>
                <ul className="flex-row">
                    {categories.map((Category) => (
                        <li key={Category.name}>
                            <span
                                onClick={() => setCurrentCategory(Category)}
                            >
                                {Category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
)};

export default Nav;