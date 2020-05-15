import React, { Component } from 'react';
import Typist from 'react-typist';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className='head'>
        <Typist cursor={{show: false}}>
          <h1 className='name'>
            <Typist.Delay ms={1000} />
            JOSHUA
            <br />
            BASCHE
          </h1>
          {/* <Typist.Delay ms={500} /> */}
          <h3 className='position'>FULL STACK WEB DEVLOPER</h3>
          <div className='skills'>
            <p>REACT</p>
            <Typist.Backspace count={5} delay={200} />
            <p>JAVASCRIPT</p>
            <Typist.Backspace count={10} delay={200} />
            <p>NODEJS</p>
            <Typist.Backspace count={6} delay={200} />
            <p>EXPRESS</p>
            <Typist.Backspace count={7} delay={200} />
            <p>MONOGO</p>
            <Typist.Backspace count={6} delay={200} />
            <p>HTML</p>
            <Typist.Backspace count={4} delay={400} />
            <p>CSS</p>
            <Typist.Backspace count={3} delay={400} />
            <p>DJANGO</p>
            <Typist.Backspace count={6} delay={200} />
            <p>
              REACT
              <br />
              JAVASCRIPT
              <br />
              NODEJS
              <br />
              EXPRESS
              <br />
              MONGO
              <br />
              HTML
              <br />
              CSS
              <br />
              DJANGO
            </p>
          </div>
        </Typist>
      </div>
    );
  }
}
