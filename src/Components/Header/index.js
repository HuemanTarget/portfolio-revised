import React, { Component } from 'react';
import Typist from 'react-typist';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className='head'>
        <Typist>
          <h1 className='name'>
            <Typist.Delay ms={1000} />
            JOSHUA
            <br />
            BASCHE
          </h1>
          <Typist.Delay ms={500} />
          <h3 className='position'>
            FULL STACK WEB DEVLOPER
          </h3>
        </Typist>
      </div>
    );
  }
}
