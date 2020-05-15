import React from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import './style.css';

const Contact = () => {
  return (
    <div className='about'>
      <ScrollAnimation
        delay={500}
        duration={3}
        initiallyVisible={false}
        animateIn='fadeIn'
        animateOut='fadeOut'
      >
        <h1 className='title'>CONTACT</h1>
      </ScrollAnimation>
    </div>
  );
};

export default Contact;