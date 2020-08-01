import React from 'react';
import 'animate.css/animate.min.css';
// import MetaTags from 'react-meta-tags';
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
      {/* <MetaTags>
        <title>Joshua Basche Portfolio</title>
        <meta name="description" content="Portfolio site displaying my current work." />
        <meta property="og:title" content="Joshua Basche Portfolio" />
        <meta property="og:image" content="https://i.imgur.com/eGX987Q.jpg" />
      </MetaTags> */}
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
