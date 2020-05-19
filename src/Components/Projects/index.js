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
              <h1>interACTive Murder Mystery</h1>
              <p>
                An interactive Mystery Story where the user decides who gets
                murdered. Made with ReactJS, Firebase, and Firestore.
              </p>
              <a
                href='https://github.com/HuemanTarget/interACTive-theater-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' />
                <h4 className='link'>GitHub</h4>
              </a>
              <a
                href='https://interactive-theatrical-app.firebaseapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-laptop' />
                <h4 className='link'>Live Demo</h4>
              </a>
            </div>
          </div>
          <div className='card'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/71WiYBT2QsL._AC_SL1500_.jpg'
              alt='poster'
            ></img>
            <div className='descriptions'>
              <h1>Red Cup Games</h1>
              <p>
                A message board for people to post about their drinking games or
                find new ones from other users or use the chat room to talk to
                people directly. Made with Django, Python, and AWS.
              </p>
              <a
                href='https://github.com/HuemanTarget/red-cup-games'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' />
                <h4 className='link'>GitHub</h4>
              </a>
              <a
                href='https://redcupgames.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-laptop' />
                <h4 className='link'>Live Demo</h4>
              </a>
            </div>
          </div>
          <div className='card'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/71WiYBT2QsL._AC_SL1500_.jpg'
              alt='poster'
            ></img>
            <div className='descriptions'>
              <h1>Red Cup Games</h1>
              <p>
                A message board for people to post about their drinking games or
                find new ones from other users or use the chat room to talk to
                people directly. Made with Django, Python, and AWS.
              </p>
              <a
                href='https://github.com/HuemanTarget/red-cup-games'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' />
                <h4 className='link'>GitHub</h4>
              </a>
              <a
                href='https://redcupgames.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-laptop' />
                <h4 className='link'>Live Demo</h4>
              </a>
            </div>
          </div>
          <div className='card'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/71WiYBT2QsL._AC_SL1500_.jpg'
              alt='poster'
            ></img>
            <div className='descriptions'>
              <h1>Red Cup Games</h1>
              <p>
                A message board for people to post about their drinking games or
                find new ones from other users or use the chat room to talk to
                people directly. Made with Django, Python, and AWS.
              </p>
              <a
                href='https://github.com/HuemanTarget/red-cup-games'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' />
                <h4 className='link'>GitHub</h4>
              </a>
              <a
                href='https://redcupgames.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-laptop' />
                <h4 className='link'>Live Demo</h4>
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
