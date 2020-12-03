import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const categories = [
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
 ];

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
      </main>
    </div>
  );
}

export default App;
