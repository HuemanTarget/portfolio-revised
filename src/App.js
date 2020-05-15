import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/About Me'
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;