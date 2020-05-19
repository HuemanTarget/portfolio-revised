import React from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { List, ListItemContent, ListItem } from 'react-mdl';

import './style.css';

const Contact = () => {
  return (
    <div className='contact'>
      <ScrollAnimation
        delay={500}
        duration={3}
        initiallyVisible={false}
        animateIn='fadeIn'
        animateOut='fadeOut'
      >
        <h1 className='title'>CONTACT</h1>
        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
          <div>
            <a href='tel:3108067483' class='button'>
              <div class='qube'>
                <div class='front'>(310)806-7483</div>
                <div class='back'>Phone Number</div>
              </div>
            </a>
          </div>
          {/* <div>
            <a href='mailto:joshbasche@live.com' class='button'>
              <div class='qube'>
                <div class='front'>joshbasche@live.com</div>
                <div class='back'>Email</div>
              </div>
            </a>
          </div> */}
        </ScrollAnimation>
      </ScrollAnimation>
    </div>
  );
};

export default Contact;
