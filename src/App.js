import React, { useState } from 'react';
import Nav from './components/Nav';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {
  const [categories] = useState([
    {
     name: "About Nicole",
     description: "Information about Nicole"
    },
    {
        name: "Portfolio",
        description: "Sample of Nicole's work"
    },
    {
        name: "Resume",
        description: "Resume for Nicole"
    },
    {
      name: "Contact",
      description: "How to reach Nicole"
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
       <Category currentCategory={currentCategory}></Category>
      </main>
      <Footer />
    </div>
  );
}

export default App;
