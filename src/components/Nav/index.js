import React from 'react';


function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props;

    return (
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                        {categories.map((category) => (
                            <li
                            className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'
                                }`}
                              key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                            {category.name}
                            </span>
                    </li>
                ))}
            </ul>
        </nav>
)};

export default Nav;