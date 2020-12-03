import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import CategoryContent from '../Category_Content';

function Category({ currentCategory }) {
    
    const renderCategory = () => {
        switch (currentCategory.name) {
            case 'About Nicole':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    };

    return (
        <section>
            <h2>{currentCategory.name}</h2>
            <CategoryContent>{renderCategory()}</CategoryContent>
        </section>
    )
}

export default Category;