import React from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import pic from '../../Assets/circle-cropped.png';


import './style.css';

const AboutMe = () => {
  return (
    <div className='about'>
      <ScrollAnimation
        delay={250}
        duration={1}
        initiallyVisible={false}
        animateIn='fadeIn'
        // animateOut='fadeOut'
      >
        <h1 className='about-title'>ABOUT ME</h1>
        <div>
          <img className='headshot' src={pic} alt='profile-pic'></img>
          
        </div>
        <h3>
          I'm a Full-Stack Software Engineer with a background in React,
          Javascript, NodeJS, Express, HTML, and CSS. With over 15 years in the
          post production world working on everything from commercials and music
          videos to features and video games, I look forward to combining my
          Software Engineering skills with my post production ones to create new
          applications that merge the two worlds.
        </h3>
        <div className='social-links'>
          <a
            href='https://www.linkedin.com/in/joshbasche/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-linkedin-square' />
            <h4 className='link'>LinkedIn</h4>
          </a>
          <a
            href='https://docdro.id/C9UKU63'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-rebel' />
            <h4 className='link'>Resume</h4>
          </a>
          <a
            href='https://github.com/HuemanTarget'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-github-square' />
            <h4 className='link'>GitHub</h4>
          </a>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default AboutMe;
