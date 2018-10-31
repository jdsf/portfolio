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
                  Greetings! My name is Jose, I'm a bioengineering graduate
                  from Bolivia exploring the world of web development and design.
                  </span>
                </p>
                <p id= "second-blurb">
                  Here you'll be able to find some of the work I've produced
                  during my trek. I've only been learning
                  javascript for the past 6 months and React for the last 3 but
                  I'm really looking forward to things I'll be able to do as
                  I become more comfortable with the tools I have.
                </p>
                <p id = "third-blurb">
                  Though I took some introductory OOP experience on java and
                  have some practice with other statistical and engineering languages
                  it really wasn't until delving a little into web development
                  my last quarter of uni that my appreciation for learning
                  about programming grew.
                </p>
                <p id = "fourth-blurb">
                  To be sure I still have a ton to learn in the realm of web
                  application, design, and programming, but I am encouraged by
                  the fact that any solution one attempts can quickly
                  and readily translate to something tangible and interactive just
                  by virtue of the medium. To be so in control of how an idea
                  manifests in both function and appearance is what draws me in.
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
