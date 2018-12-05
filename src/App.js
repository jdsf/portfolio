import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Waypoint from 'react-waypoint';
import WayWrapper from './components/WayWrapper'

import headshot from "./assets/stadfor.jpg"
import zen from "./assets/zen.png"
import git from "./assets/git.png"
import link from "./assets/link.png"
import mail from "./assets/mail.png"
import phone from "./assets/phone.png"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.appRef = React.createRef();
    this.introRef = React.createRef();

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
      <div ref = {this.appRef} className="App scrollable">
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
          <section ref = {this.introRef} id = "intro">
            <WayWrapper
              timeoutIn = {1000}
              timeoutOut = {1000}
              name = "rapid-right"
              eyeD = "circle-01-pos"
              top = {"-10%"}
              bot = {"0px"}
            >
              <div className = "circle circle-outline" id = "circle-01">
              </div>
            </WayWrapper>
            <WayWrapper
              timeout = {1000}
              name = "rapid-right"
              eyeD = "circle-02-pos"
              top = "-50%"
              bottom = "0px"
            >
              <div className = "circle circle-outline" id = "circle-02">
              </div>
            </WayWrapper>
            <WayWrapper
              timeout = {1000}
              name = "rapid-right"
              eyeD = "circle-03-pos"
              top = {"-20%"}
              bot = {"0%"}
            >
              <div className = "circle circle-outline" id = "circle-03">
              </div>
            </WayWrapper>
            <WayWrapper
              timeoutIn = {1000}
              timeoutOut = {1500}
              name = "rapid-right"
              eyeD = "cirlce-04-pos"
              top = {" -150%"}
              bot = {"0"}
            >
              <div className = "circle circle-outline" id = "circle-04">
              </div>
            </WayWrapper>
            <WayWrapper
              timeout = {1000}
              name = "scroll-top"
              eyeD = "greeting-container"
              top = {"0%"}
              bot = {"0%"}
            >
                <h1>  hello,
                  <div className = "circle" id = "circle-1">
                  </div>
                  <div className = "circle" id = "circle-2">
                  </div>
                  <div className = "circle" id = "circle-3">
                  </div>
                  <div className = "circle" id = "circle-4">
                  </div>
                </h1>
            </WayWrapper>
            <WayWrapper
              timeoutIn = {1500}
              timeoutOut = {1000}
              name = "scroll-left"
              eyeD = "second-greeting"
              top = {"-20%"}
              bot = {"0%"}
            >
                <h2> please enjoy your stay.
                  <WayWrapper
                    timeout = {500}
                    name = "scroll-left"
                    eyeD = "wrap"
                  >
                    <div className = "circle" id = "circle-5">
                    </div>
                  </WayWrapper>
                </h2>
            </WayWrapper>
          </section>
          <section id = "about">
            <article>
              <WayWrapper
                timeout = {500}
                name = "scroll-left"
                eyeD = "about-greeting"
                bot = {'50%'}
                top = {'-20%'}
              >
                  <h1> Acerca de
                    <div className = "circle" id = "circle-6">
                    </div>
                  </h1>
              </WayWrapper>
              <div id = "about-blurb">
                <WayWrapper
                  name = "scroll-right"
                  timeout = {1000}
                  bot = {'60%'}
                  top = {'5%'}
                >
                  <p id = "first-blurb">
                    <span>
                    <strong className = "pop-out">
                      Greetings!
                    </strong> My name is Jose, I'm a bioengineering graduate
                    from UW Seattle exploring the world of web development and design
                    </span>
                  </p>
                </WayWrapper>
                <WayWrapper
                  name = "scroll-right"
                  timeout = {1000}
                  bot = {'65%'}
                  top = {'-5%'}
                >
                <p id= "second-blurb">
                  Here you'll find some of the work I've produced
                  during my trek. Truth be told with all the different ways things
                  can be done I'm really still learning the ropes.
                  All in all I've been dabbling in javascript for about 7 months
                  and react for close to 3
                </p>
                </WayWrapper>
                <WayWrapper
                  name = "scroll-right"
                  timeout = {1000}
                  bot = {'70%'}
                  top = {'-10%'}
                >
                  <p id = "third-blurb">
                      <span>
                        <strong className = "pop-out">
                          Some background
                        </strong>
                        I took some introductory OOP, statistical and engineering
                        programming during school but I didn't really become personally
                        invested in the things I had created until my last quarter of school
                        when I took
                        a web development class on a whim. We were strained for time
                        but still managed to cover a little bit about vanilla js, basic HTML
                        CSS, JSON, AJAX, serving and using APIs through PHP, as well as
                        tiny bit of SQL. There's still so much more to learn!
                      </span>
                  </p>
                </WayWrapper>
                <WayWrapper
                  name = "scroll-right"
                  timeout = {1000}
                  bot = {'80%'}
                  top = {'-15%'}
                >
                  <p id = "fourth-blurb">
                    <span>
                      <strong className = "pop-out">
                        Miscellaneous
                      </strong>
                      Born in Santa Cruz de la Sierra, Bolivia,
                      a mid-sized landlocked country in the middle of South
                      America (pop ~12 million) bordering Brazil, Argentina,
                      Paraguay, Chile and Peru
                    </span>
                  </p>
                </WayWrapper>
                <WayWrapper
                  name = "scroll-right"
                  timeout = {1000}
                  bot = {'81%'}
                  top = {'-20%'}
                >
                  <p id = "fifth-blurb">
                    <span>
                      Though infamous for our third world
                      record-keeping—in fact, birth certificates were not a thing
                      until 1940 and are still not a thing in some parts of the rural
                      country—a Bolivian, Julia Flores Colque, of humble Quechua
                      descent, may be the world oldest
                      person at 118 years of age. <strong>Take that</strong>,
                      human development index!
                    </span>
                  </p>
                </WayWrapper>
                <WayWrapper
                  name = "scroll-right"
                  timeout = {1000}
                  bot = {'81%'}
                  top = {'-23%'}
                >
                  <p id = "sixth-blurb">
                    <span>
                      Charitable understanding is an important thing in this world
                    </span>
                  </p>
                </WayWrapper>
              </div>
            </article>
          </section>
          <section id = "projects">
            <WayWrapper
              name = "scroll-left"
              timeout = {500}
              bot = {'45%'}
              top = {'-120%'}
            >
              <div className = "circle circle-outline" id = "project-circle01">
              </div>
            </WayWrapper>
            <WayWrapper
              name = "scroll-left"
              timeout = {500}
              bot = {'40%'}
              top = {'-120%'}
              debug = {true}
            >
              <div className = "circle circle-outline" id = "project-circle02">
              </div>
            </WayWrapper>
            <WayWrapper
              name = "scroll-right"
              eyeD = "projects-greeting"
              timeout = {1000}
              bot = {'30%'}
              top = {'-50%'}
            >
              <div id = "projects-greeting">
                <h1> Projects
                  <div className = "circle">
                  </div>
                </h1>
              </div>
            </WayWrapper>
            <WayWrapper
              eyeD = "carousel-container"
              name = "fade"
              timeout = {1000}
              bot = {'30%'}
              top = {'-30%'}
            >
                <Carousel count = {this.state.carouselTimer}/>
            </WayWrapper>
          </section>
          <section id = "contact">
            <WayWrapper
              eyeD = "contact-greeting"
              name = "scroll-right"
              timeout = {1000}
              bot = {'50%'}
              top = { '-10%'}
            >
              <h1> CONTACT
                <div id = "contact-c1" className = "circle">
                </div>
                <div id = "contact-c2" className = "circle">
                </div>
              </h1>
            </WayWrapper>

            <WayWrapper
              name = "fade"
              timeout = {1000}
              bot = {'60%'}
              top = {'-30%'}
            >
              <ul id = "contact-links">
                <li>
                  <img src = {phone} alt = "phone number"/>
                  206 519 4109
                </li>
                <li>
                  <img src = {link} alt = "linkedin profile"/>
                  jdsf
                </li>
                <li>
                  <img src = {git} alt = "github profile"/>
                  jdsf
                </li>
                <li>
                  <img src = {mail} alt = "email address"/>
                  jdsfrugone@gmail
                </li>
              </ul>
            </WayWrapper>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
