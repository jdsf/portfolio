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

            <h2> please enjoy your stay. </h2>
          </section>
          <section id = "about">
            <article>
              <img id = "me" src= {headshot} alt ="Me!" />
              <h1> About Me </h1>
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
