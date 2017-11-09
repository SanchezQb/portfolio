import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="social-links">
          <a href="https://github.com/SanchezQb"><i className="fa fa-github animated fadeIn"></i></a>
          <a href="https://twitter.com/root_sanchez"><i className="fa fa-twitter animated fadeIn"></i></a>
        </div>
        <div className="main">
          <h2 className="greet animated fadeIn">Hi.</h2>
          <h2 className="intro animated fadeIn">My name is Chisom and I am a Full-Stack Developer, building for the web.</h2>
          <h2 className="bio animated fadeIn">I'm 24 years old and I live in Lagos, Nigeria.</h2>
          <h2 className="bio animated fadeIn">I currently work freelance, building web applications on the server side using <span className="node">Node.js</span> (Express & Loopback) and <span className="react">React.js</span> with Redux on the client side. I also write a little bit of <span       className="vue">Vue</span> </h2>
          <hr className="horizontal animated fadeIn"/>
        </div>
        <div className="caret-down animated fadeIn floating">
            <a href="#work"><i className="fa fa-chevron-down animated fadeIn"></i></a>
          </div>
        <div className="work animated fadeIn" id="work">
          <h1>My work</h1>
          <h3>These are some of my projects</h3>
        </div>
        <div className="projects animated fadeIn">
          <div className="project animated fadeIn red">
            <a href="https://strobe-6ba21.firebaseapp.com/"><img src="/Strobe-Music.png" alt="strobe"/></a>
            <h3>Strobe music is a music streaming progressive web app that I built with React.</h3>
          </div>
          <div className="project animated fadeIn red">
            <a href="https://strobe-6ba21.firebaseapp.com/"><img src="/chat.jpg" alt="chat"/></a>
            <h3>A simple chat application using Express.js and Socket.io.</h3>
          </div>
          <div className="project animated fadeIn orange"></div>
        </div>
        <hr className="row animated fadeIn" />
        <div className="caret-down animated fadeIn floating">
            <a href="#contact"><i className="fa fa-chevron-down animated fadeIn two"></i></a>
        </div>
        <div id="contact" className="contact animated fadeIn">
          <h1>Contact Me</h1>
          <div className="contact-links animated fadeIn">
            <a href="https://twitter.com/root_sanchez"><i className="fa fa-twitter animated fadeIn"></i>Twitter</a><br/>
            <a href="mailto:chisomekwuribe@gmail.com"><i className="fa fa-envelope animated fadeIn"></i>Email</a><br/>
            <a href="https://github.com/SanchezQb"><i className="fa fa-github animated fadeIn"></i>Follow Me</a>
            <div className="copyright">
              <h4>&copy; 2017 Chisom</h4>
            </div>
          
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
