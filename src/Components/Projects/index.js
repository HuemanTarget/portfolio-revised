import React from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import './style.css';

const Projects = () => {
  return (
    <div className='projects'>
      <ScrollAnimation
        delay={500}
        duration={3}
        initiallyVisible={false}
        animateIn='fadeIn'
        animateOut='fadeOut'
      >
        <div className='title'>
          <h1>PROJECTS</h1>
        </div>
        <div className='wrapper'>
          <div className='card'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/71WiYBT2QsL._AC_SL1500_.jpg'
              alt='poster'
            ></img>
            <div className='descriptions'>
              <h1>John Wick</h1>
              <p>
                After gunning down a member of the High Table -- the shadowy
                international assassin's guild -- legendary hit man John Wick
                finds himself stripped of the organization's protective
                services. Now stuck with a $14 million bounty on his head, Wick
                must fight his way through the streets of New York as he becomes
                the target of the world's most ruthless killers.
              </p>
              <a
                href='https://github.com/HuemanTarget'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' />
                <h4 className='link'>GitHub</h4>
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
