import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
     name: "About Me",
     description: "Information about Nicole"
    },
    {
        name: "Portfolio",
        description: "Sample of Nicole's work"
    },
    {
        name: "Contact",
        description: "How to reach Nicole"
    },
    {
        name: "Resume",
        description: "Resume for Nicole"
    }
 ]);

 const [currentCategory, setCurrentCategory] = useState(categories[0]);



  return (
    <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
