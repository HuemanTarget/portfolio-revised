import React from "react";
import Typist from "react-typist";

// import sample from "../../Assets/WebsiteBG.mp4";
import sampleTwo from "../../Assets/WebsiteBGTwo.mp4"

import classes from "./BackgroundVideo.module.css";
// import './style.css';

const BackgroundVideo = () => {
  // let videoSource = '../../Assets/WebsiteBG.mp4'
  return (
    <div>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={sampleTwo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <Typist cursor={{ show: false }}>
            <h1 className="name">
              <Typist.Delay ms={1000} />
              JOSHUA
              <br />
              BASCHE
            </h1>
            <h3 className="position">iOS & Full Stack Web Developer</h3>
            <div className="skills">
              <p>SWIFT</p>
              <Typist.Backspace count={5} delay={200} />
              <p>REACT</p>
              <Typist.Backspace count={5} delay={200} />
              <p>JAVASCRIPT</p>
              <Typist.Backspace count={10} delay={200} />
              <p>NODEJS</p>
              <Typist.Backspace count={6} delay={200} />
              <p>EXPRESS</p>
              <Typist.Backspace count={7} delay={200} />
              <p>HTML</p>
              <Typist.Backspace count={4} delay={400} />
              <p>CSS</p>
              <Typist.Backspace count={3} delay={400} />
              <p>DJANGO</p>
              <Typist.Backspace count={6} delay={200} />
              <p>MONGODB</p>
              <Typist.Backspace count={7} delay={200} />
              <p>ADOBE SUITE</p>
              <Typist.Backspace count={11} delay={200} />
              <p>
                SWIFT
                <br />
                REACT
                <br />
                JAVASCRIPT
                <br />
                NODEJS
                <br />
                EXPRESS
                <br />
                HTML
                <br />
                CSS
                <br />
                DJANGO
                <br />
                MONGODB
                <br />
                ADOBE SUITE
              </p>
            </div>
          </Typist>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
