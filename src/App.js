import React, { Component } from 'react';



import headshot from "./assets/stadfor.jpg"
import './App.css';

class App extends Component {

  state = ({
    header: {hover: false}
  });

  headerActive = () => {
    this.setState({
      header: {hover: true}
    });
  }

  headerDeactive = () => {
    this.setState({
      header: {hover: false}
    });
  }


  render() {
    const headerStyle = {
      height : this.state.header.hover? "7%" : "3%"
    }

    const logoStyle = {
      fontSize : this.state.header.hover? "2.2vw" : "1.1vw"
    }

    const anchorStyleLeft = {
      animation: this.state.header.hover? "fadeInLeft 1s ease 0s 1 normal"
        : "fadeOut 1s ease 0s 1 normal",
      visibility: this.state.header.hover? "visible"
        : "hidden"
    };

    const anchorStyleRight = {
      animation: this.state.header.hover? "fadeInRight 1s ease 0s 1 normal"
        : "fadeOut 1s ease 0s 1 normal",
      visibility: this.state.header.hover? "visible"
        : "hidden"
    };


    return (
      <div className="App scrollable">
        <header style = {headerStyle}
                onMouseEnter = {this.headerActive}
                onMouseLeave = {this.headerDeactive}
        >
          <a className= "left-anchor" href = "#"
              style = {anchorStyleLeft}
          > HOME </a>
          <a className = "left-anchor" href = "#"
            style = {anchorStyleLeft}
          >  ABOUT </a>
          <h1 style = {logoStyle}> JDSF </h1>
          <a className = "right-anchor" href = "#"
            style = {anchorStyleRight}
          > PROJECTS </a>
          <a className = "right-anchor" href = "#"
            style = {anchorStyleRight}
          > CONTACT </a>
        </header>
        <main id = "main-view">
          <section id = "intro">
            <div id= "greeting-container">
              <div className = "circle" id = "circle-1">
              </div>
              <div className = "circle" id = "circle-2">
              </div>
              <div className = "circle" id = "circle-3">
              </div>
              <div className = "circle" id = "circle-4">
              </div>
              <h1>  Hello,</h1>
            </div>
            <div id = "second-greeting">
              <div className = "circle" id = "circle-5">
              </div>
              <h2> please enjoy your stay. </h2>
            </div>
          </section>
          <section id = "about">
            <article>
              <img id = "me" src= {headshot} alt ="Me!" />
              <div id = "about-greeting">
                <div className = "circle" id = "circle-6">
                </div>
                <h1> Acerca de </h1>
              </div>
              <div id = "about-blurb">
                <p id = "first-blurb">
                  <span>
                  <strong className = "pop-out">
                    Greetings!
                  </strong> My name is Jose, I'm a bioengineering graduate
                  from UW Seattle exploring the world of web development and design.
                  </span>
                </p>
                <p id= "second-blurb">
                  Here you'll be able to find some of the humble work I've produced
                  during my trek. With all the different ways problems can be tackled
                  I'd be hard pressed in saying I'm not still learning the ropes.
                  All in all I've been dabbling in javascript a little over six
                  months and react for close to three.
                </p>
                <p id = "third-blurb">
                  <strong className = "pop-out">
                    Some background
                  </strong>
                    <span>
                      I took some introductory OOP, statistical and engineering
                      programming during school but I didn't really become personally
                      invested in the things I produced until my last quarter of school
                      when I took
                      a web development class on a whim (we covered vanilla js, basic html
                      CSS, JSON, AJAX, using APIs and serving content through PHP, as well as a little
                      SQL). To be sure I still have a ton to learn about both front and
                      back end but I am encouraged by what I've accomplished and the fact
                      that the medium is so readily capable of making ideas tangible and
                      interactive. To have so much control about so many aspects, from
                      design to function to presentation is very satisfying.
                    </span>
                </p>
                <p id = "fourth-blurb">
                  <strong className = "pop-out">
                    Some facts
                  </strong> I was born in Santa Cruz,
                  Bolivia, a mid-sized landlocked country in the heart of South
                  America home to ~10 million people. Personally I'm of the mindset
                  that if people genuinely care about something
                  then that thing has something to it, even if I don't particularly
                  understand it at the moment. It's up to me to make up the difference
                  and see things with the respect they deserve.
                </p>
              </div>
            </article>
          </section>
          <section id = "first" id = "projects">
          </section>

        </main>


      </div>
    );
  }
}

export default App;
