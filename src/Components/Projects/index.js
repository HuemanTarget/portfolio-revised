import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import brag from "../../Assets/brag.jpg";
import red from "../../Assets/RedCup.jpg";
import act from "../../Assets/interACTive.jpg";
import bad from "../../Assets/BreakingBlackjack.jpg";
import back from "../../Assets/BackLog.jpg";

import "./style.css";

const Projects = () => {
  return (
    <div className="projects">
      <ScrollAnimation
        delay={250}
        duration={1}
        initiallyVisible={false}
        animateIn="fadeIn"
        // animateOut='fadeOut'
      >
        <div className="title">
          <h1>PROJECTS</h1>
        </div>
        <div className="wrapper">
          <div className="card">
            <img src={back} alt="poster"></img>
            <div className="descriptions">
              <h1>Back Log</h1>
              <p>
                An IOS app for video-gamers to store their game libraries and
                change the status if its being played or completed. Made using
                React Native, Redux, Firebase, and Firestore.
              </p>
              <a
                href="https://github.com/HuemanTarget/back-log"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" />
                <h4 className="link">GitHub</h4>
              </a>
              <a
                href="https://apps.apple.com/us/app/id1523097961"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-mobile" />
                <h4 className="link">Apple App Store</h4>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={act} alt="poster"></img>
            <div className="descriptions">
              <h1>interACTive Murder Mystery</h1>
              <p>
                An interactive Mystery Story where the user decides who gets
                murdered. Made with ReactJS, Firebase, and Firestore.
              </p>
              <a
                href="https://github.com/HuemanTarget/interACTive-theater-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" />
                <h4 className="link">GitHub</h4>
              </a>
              <a
                href="https://interactive-theatrical-app.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-laptop" />
                <h4 className="link">Live Demo</h4>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={red} alt="poster"></img>
            <div className="descriptions">
              <h1>Red Cup Games</h1>
              <p>
                A message board for people to post about their drinking games or
                find new ones from other users or use the chat room to talk to
                people directly. Made with Django, Python, and AWS.
              </p>
              <a
                href="https://github.com/HuemanTarget/red-cup-games"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" />
                <h4 className="link">GitHub</h4>
              </a>
              <a
                href="https://redcupgames.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-laptop" />
                <h4 className="link">Live Demo</h4>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={bad} alt="poster"></img>
            <div className="descriptions">
              <h1>Breaking Blackjack</h1>
              <p>
                Become the King Of Meth one Blackjack at a time. A version of
                blackjack skinned with Breaking Bad sounds and images. Made with
                Javascript, HTML, and CSS.
              </p>
              <a
                href="https://github.com/HuemanTarget/breaking-blackjack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" />
                <h4 className="link">GitHub</h4>
              </a>
              <a
                href="https://breaking-blackjack.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-laptop" />
                <h4 className="link">Live Demo</h4>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={brag} alt="poster"></img>
            <div className="descriptions">
              <h1>Brag Board</h1>
              <p>
                A message board for people to post and comment about their
                accomplishments in games, sports, and even body size. Made with
                Javascript, Express, NodeJS, and MongoDB.
              </p>
              <a
                href="https://github.com/HuemanTarget/brag-board"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" />
                <h4 className="link">GitHub</h4>
              </a>
              <a
                href="https://brag-board.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-laptop" />
                <h4 className="link">Live Demo</h4>
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
