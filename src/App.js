import React, { Component } from 'react';
import Carousel from './components/Carousel'


import headshot from "./assets/stadfor.jpg"
import zen from "./assets/zen.png"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = ({
      header: {hover: false},
      carouselTimer: 0
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.advanceCarousel(),
      5000
    );
  }

  advanceCarousel = () =>{
    let current = this.state.carouselTimer;
    let future;
    if (current < 2){
      future = current + 1;
    } else {
      future = 0;
    }

    console.log(this.state);
    this.setState({
      carouselTimer: future
    });
  }

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
      height : this.state.header.hover? "3%" : "3%"
    }

    const logoStyle = {
      fontSize : this.state.header.hover? "1.5vw" : "1.1vw"
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
                  In this humble abode you'll find some of the work I've produced
                  during my trek. With all the different ways problems can be tackled
                  I'd be hard pressed to say I'm not still learning the ropes.
                  All in all I've been dabbling in javascript a little over six
                  months and react for close to three.
                </p>
                <p id = "third-blurb">
                    <span>
                      <strong className = "pop-out">
                        Some background
                      </strong>
                      I took some introductory OOP, statistical and engineering
                      programming during school but I didn't really become personally
                      invested in the things I produced until my last quarter of school
                      when I took
                      a web development class on a whim (we covered vanilla js, basic html
                      CSS, JSON, AJAX, using APIs and serving content through PHP, as well as a little
                      SQL). I still have a ton to learn about both front and
                      back end but I am encouraged by what I've accomplished so far.
                      Stay tuned!
                    </span>
                </p>
                <p id = "fourth-blurb">
                  <span>
                    <strong className = "pop-out">
                      Miscellaneous
                    </strong>
                    I was born in Santa Cruz,
                    Bolivia, a mid-sized landlocked country in the heart of South
                    America home to ~10 million people. Personally I'm of the mindset
                    that if folks genuinely care about something
                    then that thing must have something to it, even if I don't particularly
                    understand it at the moment. It's up to me to make up the difference
                    and see things with the respect they deserve.
                  </span>
                </p>
              </div>
            </article>
          </section>
          <section id = "projects">
            <div id = "projects-greeting">
              <div className = "circle">
              </div>
              <h1> Projects </h1>
            </div>
            <Carousel count = {this.state.carouselTimer}/>
          </section>
          <section id = "contact">
            <h1> Contact </h1>
            
          </section>
        </main>
      </div>
    );
  }
}

export default App;
