import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
