import React from 'react';
import 'animate.css/animate.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';

// import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/About Me';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import './App.css';

const App = () => {
  return (
    <div className='App'>
  
      <Header />
      
        <AboutMe />
     

      <Projects />
      <Contact />
    </div>
  );
};

export default App;
